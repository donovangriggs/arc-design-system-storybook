import { defineCustomElements } from '@arctech/core/loader';

/**
 * Register all Arc Design System custom elements with the browser.
 * Call this once at application startup (e.g., in your root +layout.svelte or main.ts).
 */
export function setupArcElements(): void {
  defineCustomElements();
}
