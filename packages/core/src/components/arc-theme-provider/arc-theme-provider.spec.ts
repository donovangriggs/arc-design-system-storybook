import { newSpecPage } from '@stencil/core/testing';
import { ArcThemeProvider } from './arc-theme-provider';

describe('arc-theme-provider', () => {
  it('sets data-theme="light" when theme="light"', async () => {
    const page = await newSpecPage({
      components: [ArcThemeProvider],
      html: '<arc-theme-provider theme="light"><div>content</div></arc-theme-provider>',
    });
    expect(page.doc.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('sets data-theme="dark" when theme="dark"', async () => {
    const page = await newSpecPage({
      components: [ArcThemeProvider],
      html: '<arc-theme-provider theme="dark"><div>content</div></arc-theme-provider>',
    });
    expect(page.doc.documentElement.getAttribute('data-theme')).toBe('dark');
  });

  it('defaults to system preference', async () => {
    const page = await newSpecPage({
      components: [ArcThemeProvider],
      html: '<arc-theme-provider><div>content</div></arc-theme-provider>',
    });
    // In JSDOM, matchMedia defaults to not matching, so system resolves to 'light'
    expect(page.doc.documentElement.getAttribute('data-theme')).toBe('light');
  });

  it('renders slotted content', async () => {
    const page = await newSpecPage({
      components: [ArcThemeProvider],
      html: '<arc-theme-provider theme="light"><p>Hello</p></arc-theme-provider>',
    });
    const slotted = page.root!.querySelector('p');
    expect(slotted).not.toBeNull();
    expect(slotted!.textContent).toBe('Hello');
  });

  it('updates data-theme when theme prop changes', async () => {
    const page = await newSpecPage({
      components: [ArcThemeProvider],
      html: '<arc-theme-provider theme="light"><div>content</div></arc-theme-provider>',
    });
    expect(page.doc.documentElement.getAttribute('data-theme')).toBe('light');

    page.root!.setAttribute('theme', 'dark');
    await page.waitForChanges();
    expect(page.doc.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
