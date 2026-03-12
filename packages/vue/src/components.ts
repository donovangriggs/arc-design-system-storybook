import { defineComponent, h, type PropType } from 'vue';

/**
 * ArcButton - A button component with multiple variants and states.
 *
 * Events: arcClick
 */
export const ArcButton = defineComponent({
  name: 'ArcButton',
  props: {
    variant: {
      type: String as PropType<'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'>,
      default: 'primary',
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      default: 'md',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['arc-click'],
  setup(props, { slots, emit }) {
    const handleArcClick = () => {
      emit('arc-click');
    };

    return () =>
      h(
        'arc-button',
        {
          variant: props.variant,
          size: props.size,
          disabled: props.disabled,
          type: props.type,
          loading: props.loading,
          onArcClick: handleArcClick,
        },
        slots.default?.(),
      );
  },
});

/**
 * ArcCard - A container component with header, body, and footer slots.
 */
export const ArcCard = defineComponent({
  name: 'ArcCard',
  props: {
    variant: {
      type: String as PropType<'default' | 'elevated' | 'outlined'>,
      default: 'default',
    },
    padding: {
      type: String as PropType<'none' | 'sm' | 'md' | 'lg'>,
      default: 'md',
    },
    clickable: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'arc-card',
        {
          variant: props.variant,
          padding: props.padding,
          clickable: props.clickable,
        },
        slots.default?.(),
      );
  },
});

/**
 * ArcInput - A text input component with label, helper text, and validation.
 *
 * Events: arcInput, arcChange, arcFocus, arcBlur
 */
export const ArcInput = defineComponent({
  name: 'ArcInput',
  props: {
    type: {
      type: String as PropType<'text' | 'email' | 'password' | 'search' | 'number' | 'tel' | 'url'>,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: undefined,
    },
    helperText: {
      type: String,
      default: undefined,
    },
    errorMessage: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      default: 'md',
    },
    name: {
      type: String,
      default: undefined,
    },
  },
  emits: ['arc-input', 'arc-change', 'arc-focus', 'arc-blur'],
  setup(props, { slots, emit }) {
    const handleArcInput = (event: CustomEvent<string>) => {
      emit('arc-input', event.detail);
    };

    const handleArcChange = (event: CustomEvent<string>) => {
      emit('arc-change', event.detail);
    };

    const handleArcFocus = () => {
      emit('arc-focus');
    };

    const handleArcBlur = () => {
      emit('arc-blur');
    };

    return () =>
      h(
        'arc-input',
        {
          type: props.type,
          value: props.value,
          placeholder: props.placeholder,
          label: props.label,
          'helper-text': props.helperText,
          'error-message': props.errorMessage,
          disabled: props.disabled,
          required: props.required,
          size: props.size,
          name: props.name,
          onArcInput: handleArcInput,
          onArcChange: handleArcChange,
          onArcFocus: handleArcFocus,
          onArcBlur: handleArcBlur,
        },
        slots.default?.(),
      );
  },
});

/**
 * ArcBadge - A badge/label component with color variants.
 */
export const ArcBadge = defineComponent({
  name: 'ArcBadge',
  props: {
    variant: {
      type: String as PropType<'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'>,
      default: 'primary',
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      default: 'md',
    },
    dot: {
      type: Boolean,
      default: false,
    },
    pill: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'arc-badge',
        {
          variant: props.variant,
          size: props.size,
          dot: props.dot,
          pill: props.pill,
        },
        slots.default?.(),
      );
  },
});

/**
 * ArcAvatar - An avatar component with image, initials, or fallback icon.
 */
export const ArcAvatar = defineComponent({
  name: 'ArcAvatar',
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    size: {
      type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
      default: 'md',
    },
    shape: {
      type: String as PropType<'circle' | 'square'>,
      default: 'circle',
    },
  },
  setup(props) {
    return () =>
      h('arc-avatar', {
        src: props.src,
        alt: props.alt,
        name: props.name,
        size: props.size,
        shape: props.shape,
      });
  },
});

/**
 * ArcModal - A dialog/modal component with overlay.
 *
 * Events: arcClose
 */
export const ArcModal = defineComponent({
  name: 'ArcModal',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg' | 'full'>,
      default: 'md',
    },
    closeOnOverlay: {
      type: Boolean,
      default: true,
    },
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['arc-close'],
  setup(props, { slots, emit }) {
    const handleArcClose = () => {
      emit('arc-close');
    };

    return () =>
      h(
        'arc-modal',
        {
          open: props.open,
          size: props.size,
          'close-on-overlay': props.closeOnOverlay,
          'close-on-escape': props.closeOnEscape,
          onArcClose: handleArcClose,
        },
        slots.default?.(),
      );
  },
});

/**
 * ArcAlert - An alert/notification component with variants and dismiss.
 *
 * Events: arcDismiss
 */
export const ArcAlert = defineComponent({
  name: 'ArcAlert',
  props: {
    variant: {
      type: String as PropType<'info' | 'success' | 'warning' | 'error'>,
      default: 'info',
    },
    alertTitle: {
      type: String,
      default: undefined,
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['arc-dismiss'],
  setup(props, { slots, emit }) {
    const handleArcDismiss = () => {
      emit('arc-dismiss');
    };

    return () =>
      h(
        'arc-alert',
        {
          variant: props.variant,
          'alert-title': props.alertTitle,
          dismissible: props.dismissible,
          icon: props.icon,
          onArcDismiss: handleArcDismiss,
        },
        slots.default?.(),
      );
  },
});

/**
 * ArcTooltip - A tooltip component that wraps trigger content.
 */
export const ArcTooltip = defineComponent({
  name: 'ArcTooltip',
  props: {
    content: {
      type: String,
      default: '',
    },
    position: {
      type: String as PropType<'top' | 'right' | 'bottom' | 'left'>,
      default: 'top',
    },
    delay: {
      type: Number,
      default: 200,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'arc-tooltip',
        {
          content: props.content,
          position: props.position,
          delay: props.delay,
        },
        slots.default?.(),
      );
  },
});

/**
 * ArcIcon - An SVG icon component from the built-in icon set.
 */
export const ArcIcon = defineComponent({
  name: 'ArcIcon',
  props: {
    name: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 24,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
    strokeWidth: {
      type: Number,
      default: 2,
    },
  },
  setup(props) {
    return () =>
      h('arc-icon', {
        name: props.name,
        size: props.size,
        color: props.color,
        'stroke-width': props.strokeWidth,
      });
  },
});
