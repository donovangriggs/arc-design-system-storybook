import React, { useRef, useEffect, forwardRef, type ReactNode } from 'react';
import type {
  EventMap,
  ArcButtonProps,
  ArcCardProps,
  ArcInputProps,
  ArcBadgeProps,
  ArcAvatarProps,
  ArcModalProps,
  ArcAlertProps,
  ArcTooltipProps,
  ArcIconProps,
} from './types';

// ── Utility: Web Component Wrapper Factory ──────────────────────────────────

interface WrapperConfig<P> {
  readonly tagName: string;
  readonly eventMap: EventMap;
  readonly propNames: ReadonlyArray<keyof P>;
}

function createWebComponentWrapper<P extends Record<string, unknown>>(
  config: WrapperConfig<P>,
) {
  const { tagName, eventMap, propNames } = config;

  const WrappedComponent = forwardRef<HTMLElement, P & { readonly children?: ReactNode }>(
    (props, ref) => {
      const innerRef = useRef<HTMLElement>(null);
      // Cast once for indexed property access throughout
      const propsRecord = props as unknown as Record<string, unknown>;

      // Merge forwarded ref with internal ref
      useEffect(() => {
        if (ref == null) return;
        const node = innerRef.current;
        if (typeof ref === 'function') {
          ref(node);
        } else {
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }
      }, [ref]);

      // Sync properties to the web component element
      const propValues = propNames.map((name) => propsRecord[name as string]);
      useEffect(() => {
        const el = innerRef.current;
        if (el == null) return;

        for (const propName of propNames) {
          const value = propsRecord[propName as string];
          if (value !== undefined) {
            (el as unknown as Record<string, unknown>)[propName as string] = value;
          }
        }
      }, propValues); // eslint-disable-line react-hooks/exhaustive-deps

      // Attach and clean up custom event listeners
      const eventHandlers = Object.values(eventMap).map(
        (reactPropName) => propsRecord[reactPropName],
      );
      useEffect(() => {
        const el = innerRef.current;
        if (el == null) return;

        const cleanups: Array<() => void> = [];

        for (const [customEventName, reactPropName] of Object.entries(eventMap)) {
          const handler = propsRecord[reactPropName] as
            | ((event: CustomEvent) => void)
            | undefined;

          if (typeof handler === 'function') {
            const listener = (event: Event) => handler(event as CustomEvent);
            el.addEventListener(customEventName, listener);
            cleanups.push(() => el.removeEventListener(customEventName, listener));
          }
        }

        return () => {
          for (const cleanup of cleanups) {
            cleanup();
          }
        };
      }, eventHandlers); // eslint-disable-line react-hooks/exhaustive-deps

      // Build HTML attributes: only pass simple string/number/boolean attrs,
      // skip event callbacks and complex objects
      const htmlAttrs: Record<string, unknown> = {};
      for (const propName of propNames) {
        const value = propsRecord[propName as string];
        if (value === undefined) continue;
        const valueType = typeof value;
        if (valueType === 'string' || valueType === 'number') {
          htmlAttrs[propName as string] = value;
        } else if (valueType === 'boolean' && value === true) {
          htmlAttrs[propName as string] = '';
        }
      }

      return React.createElement(
        tagName,
        { ...htmlAttrs, ref: innerRef },
        propsRecord.children as ReactNode,
      );
    },
  );

  // Convert tag name to PascalCase for React DevTools (e.g. "arc-button" → "ArcButton")
  const displayName = tagName
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
  WrappedComponent.displayName = displayName;

  return WrappedComponent;
}

// ── Component Wrappers ──────────────────────────────────────────────────────

export const ArcButton = createWebComponentWrapper<ArcButtonProps>({
  tagName: 'arc-button',
  eventMap: {
    arcClick: 'onArcClick',
  },
  propNames: ['variant', 'size', 'disabled', 'loading', 'type'],
});

export const ArcCard = createWebComponentWrapper<ArcCardProps>({
  tagName: 'arc-card',
  eventMap: {},
  propNames: ['variant', 'padding', 'clickable'],
});

export const ArcInput = createWebComponentWrapper<ArcInputProps>({
  tagName: 'arc-input',
  eventMap: {
    arcInput: 'onArcInput',
    arcChange: 'onArcChange',
    arcFocus: 'onArcFocus',
    arcBlur: 'onArcBlur',
  },
  propNames: [
    'type', 'placeholder', 'value', 'label', 'helperText',
    'errorMessage', 'disabled', 'required', 'size', 'name',
  ],
});

export const ArcBadge = createWebComponentWrapper<ArcBadgeProps>({
  tagName: 'arc-badge',
  eventMap: {},
  propNames: ['variant', 'size', 'dot', 'pill'],
});

export const ArcAvatar = createWebComponentWrapper<ArcAvatarProps>({
  tagName: 'arc-avatar',
  eventMap: {},
  propNames: ['src', 'alt', 'name', 'size', 'shape'],
});

export const ArcModal = createWebComponentWrapper<ArcModalProps>({
  tagName: 'arc-modal',
  eventMap: {
    arcClose: 'onArcClose',
  },
  propNames: ['open', 'size', 'closeOnOverlay', 'closeOnEscape'],
});

export const ArcAlert = createWebComponentWrapper<ArcAlertProps>({
  tagName: 'arc-alert',
  eventMap: {
    arcDismiss: 'onArcDismiss',
  },
  propNames: ['variant', 'alertTitle', 'dismissible', 'icon'],
});

export const ArcTooltip = createWebComponentWrapper<ArcTooltipProps>({
  tagName: 'arc-tooltip',
  eventMap: {},
  propNames: ['content', 'position', 'delay'],
});

export const ArcIcon = createWebComponentWrapper<ArcIconProps>({
  tagName: 'arc-icon',
  eventMap: {},
  propNames: ['name', 'size', 'color', 'strokeWidth'],
});
