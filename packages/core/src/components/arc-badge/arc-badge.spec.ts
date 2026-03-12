import { newSpecPage } from '@stencil/core/testing';
import { ArcBadge } from './arc-badge';

describe('arc-badge', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge>New</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge).not.toBeNull();
    expect(badge!.classList.contains('variant-primary')).toBe(true);
    expect(badge!.classList.contains('size-md')).toBe(true);
    expect(badge!.classList.contains('pill')).toBe(true);
    expect(badge!.classList.contains('dot')).toBe(false);
  });

  it('renders primary variant', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge variant="primary">Primary</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.classList.contains('variant-primary')).toBe(true);
  });

  it('renders secondary variant', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge variant="secondary">Secondary</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.classList.contains('variant-secondary')).toBe(true);
  });

  it('renders success variant', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge variant="success">Success</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.classList.contains('variant-success')).toBe(true);
  });

  it('renders warning variant', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge variant="warning">Warning</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.classList.contains('variant-warning')).toBe(true);
  });

  it('renders error variant', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge variant="error">Error</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.classList.contains('variant-error')).toBe(true);
  });

  it('renders info variant', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge variant="info">Info</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.classList.contains('variant-info')).toBe(true);
  });

  it('renders neutral variant', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge variant="neutral">Neutral</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.classList.contains('variant-neutral')).toBe(true);
  });

  it('renders sm size', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge size="sm">Small</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.classList.contains('size-sm')).toBe(true);
  });

  it('renders md size', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge size="md">Medium</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.classList.contains('size-md')).toBe(true);
  });

  it('renders lg size', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge size="lg">Large</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.classList.contains('size-lg')).toBe(true);
  });

  it('dot mode shows dot indicator and hides content', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge dot>Hidden</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.classList.contains('dot')).toBe(true);
    const dotIndicator = badge!.querySelector('.dot-indicator');
    expect(dotIndicator).not.toBeNull();
    const slot = badge!.querySelector('slot');
    expect(slot).toBeNull();
  });

  it('non-dot mode renders slot content', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge>Visible</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.classList.contains('dot')).toBe(false);
    const slot = badge!.querySelector('slot');
    expect(slot).not.toBeNull();
  });

  it('pill shape applies pill class by default', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge>Pill</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.classList.contains('pill')).toBe(true);
  });

  it('non-pill shape removes pill class', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge pill="false">Rectangular</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.classList.contains('pill')).toBe(false);
  });

  it('exposes badge CSS part', async () => {
    const page = await newSpecPage({
      components: [ArcBadge],
      html: '<arc-badge>Part</arc-badge>',
    });
    const badge = page.root!.shadowRoot!.querySelector('.badge');
    expect(badge!.getAttribute('part')).toBe('badge');
  });
});
