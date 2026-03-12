import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'arc-theme-provider',
  styleUrl: 'arc-theme-provider.css',
  shadow: false,
})
export class ArcThemeProvider {
  /** Theme mode: 'light', 'dark', or 'system' (follows OS preference) */
  @Prop() theme: 'light' | 'dark' | 'system' = 'system';

  private mediaQuery?: MediaQueryList;
  private mediaQueryHandler?: (e: MediaQueryListEvent) => void;

  connectedCallback() {
    this.applyTheme();
  }

  disconnectedCallback() {
    this.removeMediaQueryListener();
  }

  @Watch('theme')
  onThemeChange() {
    this.applyTheme();
  }

  private applyTheme(): void {
    this.removeMediaQueryListener();

    if (this.theme === 'system') {
      this.applySystemTheme();
    } else {
      document.documentElement.setAttribute('data-theme', this.theme);
    }
  }

  private applySystemTheme(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const resolvedTheme = this.mediaQuery.matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', resolvedTheme);

    this.mediaQueryHandler = (e: MediaQueryListEvent) => {
      const updated = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', updated);
    };

    this.mediaQuery.addEventListener('change', this.mediaQueryHandler);
  }

  private removeMediaQueryListener(): void {
    if (this.mediaQuery && this.mediaQueryHandler) {
      this.mediaQuery.removeEventListener('change', this.mediaQueryHandler);
      this.mediaQuery = undefined;
      this.mediaQueryHandler = undefined;
    }
  }

  render() {
    return <slot />;
  }
}
