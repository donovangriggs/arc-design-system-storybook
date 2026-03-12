import { newSpecPage } from '@stencil/core/testing';
import { ArcCard } from './arc-card';

describe('arc-card', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ArcCard],
      html: '<arc-card>Content</arc-card>',
    });
    const card = page.root!.shadowRoot!.querySelector('.card');
    expect(card).not.toBeNull();
    expect(card!.classList.contains('variant-default')).toBe(true);
    expect(card!.classList.contains('padding-md')).toBe(true);
    expect(card!.classList.contains('clickable')).toBe(false);
  });

  it('renders default variant', async () => {
    const page = await newSpecPage({
      components: [ArcCard],
      html: '<arc-card variant="default">Content</arc-card>',
    });
    const card = page.root!.shadowRoot!.querySelector('.card');
    expect(card!.classList.contains('variant-default')).toBe(true);
  });

  it('renders elevated variant', async () => {
    const page = await newSpecPage({
      components: [ArcCard],
      html: '<arc-card variant="elevated">Content</arc-card>',
    });
    const card = page.root!.shadowRoot!.querySelector('.card');
    expect(card!.classList.contains('variant-elevated')).toBe(true);
  });

  it('renders outlined variant', async () => {
    const page = await newSpecPage({
      components: [ArcCard],
      html: '<arc-card variant="outlined">Content</arc-card>',
    });
    const card = page.root!.shadowRoot!.querySelector('.card');
    expect(card!.classList.contains('variant-outlined')).toBe(true);
  });

  it('renders none padding', async () => {
    const page = await newSpecPage({
      components: [ArcCard],
      html: '<arc-card padding="none">Content</arc-card>',
    });
    const card = page.root!.shadowRoot!.querySelector('.card');
    expect(card!.classList.contains('padding-none')).toBe(true);
  });

  it('renders sm padding', async () => {
    const page = await newSpecPage({
      components: [ArcCard],
      html: '<arc-card padding="sm">Content</arc-card>',
    });
    const card = page.root!.shadowRoot!.querySelector('.card');
    expect(card!.classList.contains('padding-sm')).toBe(true);
  });

  it('renders md padding', async () => {
    const page = await newSpecPage({
      components: [ArcCard],
      html: '<arc-card padding="md">Content</arc-card>',
    });
    const card = page.root!.shadowRoot!.querySelector('.card');
    expect(card!.classList.contains('padding-md')).toBe(true);
  });

  it('renders lg padding', async () => {
    const page = await newSpecPage({
      components: [ArcCard],
      html: '<arc-card padding="lg">Content</arc-card>',
    });
    const card = page.root!.shadowRoot!.querySelector('.card');
    expect(card!.classList.contains('padding-lg')).toBe(true);
  });

  it('renders default slot content in body', async () => {
    const page = await newSpecPage({
      components: [ArcCard],
      html: '<arc-card>Body content</arc-card>',
    });
    const body = page.root!.shadowRoot!.querySelector('.body');
    expect(body).not.toBeNull();
    expect(body!.getAttribute('part')).toBe('body');
  });

  it('renders header slot', async () => {
    const page = await newSpecPage({
      components: [ArcCard],
      html: '<arc-card><span slot="header">Header</span></arc-card>',
    });
    const header = page.root!.shadowRoot!.querySelector('.header');
    expect(header).not.toBeNull();
    expect(header!.getAttribute('part')).toBe('header');
  });

  it('renders footer slot', async () => {
    const page = await newSpecPage({
      components: [ArcCard],
      html: '<arc-card><span slot="footer">Footer</span></arc-card>',
    });
    const footer = page.root!.shadowRoot!.querySelector('.footer');
    expect(footer).not.toBeNull();
    expect(footer!.getAttribute('part')).toBe('footer');
  });

  it('clickable adds clickable class and role', async () => {
    const page = await newSpecPage({
      components: [ArcCard],
      html: '<arc-card clickable>Clickable</arc-card>',
    });
    const card = page.root!.shadowRoot!.querySelector('.card');
    expect(card!.classList.contains('clickable')).toBe(true);
    expect(card!.getAttribute('role')).toBe('button');
    expect(card!.getAttribute('tabindex')).toBe('0');
  });

  it('non-clickable card has no role or tabindex', async () => {
    const page = await newSpecPage({
      components: [ArcCard],
      html: '<arc-card>Static</arc-card>',
    });
    const card = page.root!.shadowRoot!.querySelector('.card');
    expect(card!.getAttribute('role')).toBeNull();
    expect(card!.getAttribute('tabindex')).toBeNull();
  });

  it('exposes card CSS part', async () => {
    const page = await newSpecPage({
      components: [ArcCard],
      html: '<arc-card>Content</arc-card>',
    });
    const card = page.root!.shadowRoot!.querySelector('.card');
    expect(card!.getAttribute('part')).toBe('card');
  });
});
