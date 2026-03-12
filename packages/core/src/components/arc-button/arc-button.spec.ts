import { newSpecPage } from '@stencil/core/testing';
import { ArcButton } from './arc-button';

describe('arc-button', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button>Click me</arc-button>',
    });
    const button = page.root!.shadowRoot!.querySelector('button');
    expect(button).not.toBeNull();
    expect(button!.getAttribute('type')).toBe('button');
    expect(button!.classList.contains('variant-primary')).toBe(true);
    expect(button!.classList.contains('size-md')).toBe(true);
    expect(button!.hasAttribute('disabled')).toBe(false);
  });

  it('renders primary variant', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button variant="primary">Primary</arc-button>',
    });
    const button = page.root!.shadowRoot!.querySelector('button');
    expect(button!.classList.contains('variant-primary')).toBe(true);
  });

  it('renders secondary variant', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button variant="secondary">Secondary</arc-button>',
    });
    const button = page.root!.shadowRoot!.querySelector('button');
    expect(button!.classList.contains('variant-secondary')).toBe(true);
  });

  it('renders outline variant', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button variant="outline">Outline</arc-button>',
    });
    const button = page.root!.shadowRoot!.querySelector('button');
    expect(button!.classList.contains('variant-outline')).toBe(true);
  });

  it('renders ghost variant', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button variant="ghost">Ghost</arc-button>',
    });
    const button = page.root!.shadowRoot!.querySelector('button');
    expect(button!.classList.contains('variant-ghost')).toBe(true);
  });

  it('renders destructive variant', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button variant="destructive">Delete</arc-button>',
    });
    const button = page.root!.shadowRoot!.querySelector('button');
    expect(button!.classList.contains('variant-destructive')).toBe(true);
  });

  it('renders sm size', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button size="sm">Small</arc-button>',
    });
    const button = page.root!.shadowRoot!.querySelector('button');
    expect(button!.classList.contains('size-sm')).toBe(true);
  });

  it('renders md size', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button size="md">Medium</arc-button>',
    });
    const button = page.root!.shadowRoot!.querySelector('button');
    expect(button!.classList.contains('size-md')).toBe(true);
  });

  it('renders lg size', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button size="lg">Large</arc-button>',
    });
    const button = page.root!.shadowRoot!.querySelector('button');
    expect(button!.classList.contains('size-lg')).toBe(true);
  });

  it('disabled state sets disabled attribute on button', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button disabled>Disabled</arc-button>',
    });
    const button = page.root!.shadowRoot!.querySelector('button');
    expect(button!.hasAttribute('disabled')).toBe(true);
    expect(button!.getAttribute('aria-disabled')).toBe('true');
  });

  it('disabled state prevents arcClick emission', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button disabled>Disabled</arc-button>',
    });
    const spy = jest.fn();
    page.root!.addEventListener('arcClick', spy);
    const button = page.root!.shadowRoot!.querySelector('button');
    button!.click();
    expect(spy).not.toHaveBeenCalled();
  });

  it('loading state shows spinner', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button loading>Loading</arc-button>',
    });
    const button = page.root!.shadowRoot!.querySelector('button');
    const spinner = button!.querySelector('.spinner');
    expect(spinner).not.toBeNull();
    expect(button!.classList.contains('loading')).toBe(true);
    expect(button!.hasAttribute('disabled')).toBe(true);
    expect(button!.getAttribute('aria-busy')).toBe('true');
  });

  it('loading state hides content visually', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button loading>Loading</arc-button>',
    });
    const content = page.root!.shadowRoot!.querySelector('.content');
    expect(content!.classList.contains('hidden')).toBe(true);
  });

  it('emits arcClick event when clicked', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button>Click me</arc-button>',
    });
    const spy = jest.fn();
    page.root!.addEventListener('arcClick', spy);
    const button = page.root!.shadowRoot!.querySelector('button');
    button!.click();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('sets type attribute to submit', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button type="submit">Submit</arc-button>',
    });
    const button = page.root!.shadowRoot!.querySelector('button');
    expect(button!.getAttribute('type')).toBe('submit');
  });

  it('sets type attribute to reset', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button type="reset">Reset</arc-button>',
    });
    const button = page.root!.shadowRoot!.querySelector('button');
    expect(button!.getAttribute('type')).toBe('reset');
  });

  it('exposes button CSS part', async () => {
    const page = await newSpecPage({
      components: [ArcButton],
      html: '<arc-button>Part</arc-button>',
    });
    const button = page.root!.shadowRoot!.querySelector('button');
    expect(button!.getAttribute('part')).toBe('button');
  });
});
