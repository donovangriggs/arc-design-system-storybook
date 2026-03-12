import type { App, Plugin } from 'vue';

import {
  ArcButton,
  ArcCard,
  ArcInput,
  ArcBadge,
  ArcAvatar,
  ArcModal,
  ArcAlert,
  ArcTooltip,
  ArcIcon,
} from './components';

/** All arc-* tag names that should be treated as custom elements by Vue. */
const ARC_CUSTOM_ELEMENT_TAGS = [
  'arc-button',
  'arc-card',
  'arc-input',
  'arc-badge',
  'arc-avatar',
  'arc-modal',
  'arc-alert',
  'arc-tooltip',
  'arc-icon',
] as const;

/**
 * Returns true if the given tag is a Arc Design System custom element.
 * Use this with Vue's `app.config.compilerOptions.isCustomElement`
 * or the Vite vue plugin's `template.compilerOptions.isCustomElement`.
 *
 * @example
 * ```ts
 * // vite.config.ts
 * import vue from '@vitejs/plugin-vue';
 * import { isArcCustomElement } from '@arctech/vue';
 *
 * export default defineConfig({
 *   plugins: [
 *     vue({
 *       template: {
 *         compilerOptions: {
 *           isCustomElement: isArcCustomElement,
 *         },
 *       },
 *     }),
 *   ],
 * });
 * ```
 */
export function isArcCustomElement(tag: string): boolean {
  return tag.startsWith('arc-');
}

/**
 * Loads and registers the @arctech/core custom elements.
 * Call this once at app startup to ensure the web components are defined
 * in the browser's custom element registry.
 */
export async function defineCustomElements(): Promise<void> {
  const { defineCustomElements: define } = await import(
    '@arctech/core/loader'
  );
  define(window);
}

/**
 * Vue plugin that:
 * 1. Registers all Arc Design System wrapper components globally.
 * 2. Configures Vue to recognize arc-* tags as custom elements.
 * 3. Loads the underlying web component definitions.
 *
 * @example
 * ```ts
 * import { createApp } from 'vue';
 * import { ArcDesignSystemPlugin } from '@arctech/vue';
 * import App from './App.vue';
 *
 * createApp(App).use(ArcDesignSystemPlugin).mount('#app');
 * ```
 */
export const ArcDesignSystemPlugin: Plugin = {
  install(app: App): void {
    // Tell Vue's template compiler to treat arc-* tags as custom elements
    app.config.compilerOptions.isCustomElement = isArcCustomElement;

    // Register all wrapper components globally
    app.component('ArcButton', ArcButton);
    app.component('ArcCard', ArcCard);
    app.component('ArcInput', ArcInput);
    app.component('ArcBadge', ArcBadge);
    app.component('ArcAvatar', ArcAvatar);
    app.component('ArcModal', ArcModal);
    app.component('ArcAlert', ArcAlert);
    app.component('ArcTooltip', ArcTooltip);
    app.component('ArcIcon', ArcIcon);

    // Load the web component definitions
    defineCustomElements();
  },
};
