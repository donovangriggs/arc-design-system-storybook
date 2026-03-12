import { newSpecPage } from '@stencil/core/testing';
import { ArcAvatar } from './arc-avatar';

describe('arc-avatar', () => {
  it('renders with image src', async () => {
    const page = await newSpecPage({
      components: [ArcAvatar],
      html: '<arc-avatar src="https://example.com/photo.jpg" alt="User photo"></arc-avatar>',
    });

    const img = page.root!.shadowRoot!.querySelector('img');
    expect(img).not.toBeNull();
    expect(img!.getAttribute('src')).toBe('https://example.com/photo.jpg');
    expect(img!.getAttribute('alt')).toBe('User photo');
  });

  it('falls back to initials when no src', async () => {
    const page = await newSpecPage({
      components: [ArcAvatar],
      html: '<arc-avatar name="John Doe"></arc-avatar>',
    });

    const img = page.root!.shadowRoot!.querySelector('img');
    expect(img).toBeNull();

    const initials = page.root!.shadowRoot!.querySelector('.avatar-initials');
    expect(initials).not.toBeNull();
    expect(initials!.textContent).toBe('JD');
  });

  it('falls back to icon when no name or src', async () => {
    const page = await newSpecPage({
      components: [ArcAvatar],
      html: '<arc-avatar></arc-avatar>',
    });

    const img = page.root!.shadowRoot!.querySelector('img');
    expect(img).toBeNull();

    const initials = page.root!.shadowRoot!.querySelector('.avatar-initials');
    expect(initials).toBeNull();

    const fallback = page.root!.shadowRoot!.querySelector('.avatar-fallback');
    expect(fallback).not.toBeNull();

    const svg = fallback!.querySelector('svg');
    expect(svg).not.toBeNull();
  });

  it('shows initials on image error', async () => {
    const page = await newSpecPage({
      components: [ArcAvatar],
      html: '<arc-avatar src="https://example.com/broken.jpg" name="Jane Smith"></arc-avatar>',
    });

    // Initially shows image
    let img = page.root!.shadowRoot!.querySelector('img');
    expect(img).not.toBeNull();

    // Trigger error
    img!.dispatchEvent(new Event('error'));
    await page.waitForChanges();

    // Now shows initials
    img = page.root!.shadowRoot!.querySelector('img');
    expect(img).toBeNull();

    const initials = page.root!.shadowRoot!.querySelector('.avatar-initials');
    expect(initials).not.toBeNull();
    expect(initials!.textContent).toBe('JS');
  });

  it('renders xs size', async () => {
    const page = await newSpecPage({
      components: [ArcAvatar],
      html: '<arc-avatar size="xs" name="A"></arc-avatar>',
    });

    const avatar = page.root!.shadowRoot!.querySelector('.avatar--xs');
    expect(avatar).not.toBeNull();
  });

  it('renders sm size', async () => {
    const page = await newSpecPage({
      components: [ArcAvatar],
      html: '<arc-avatar size="sm" name="A"></arc-avatar>',
    });

    const avatar = page.root!.shadowRoot!.querySelector('.avatar--sm');
    expect(avatar).not.toBeNull();
  });

  it('renders md size by default', async () => {
    const page = await newSpecPage({
      components: [ArcAvatar],
      html: '<arc-avatar name="A"></arc-avatar>',
    });

    const avatar = page.root!.shadowRoot!.querySelector('.avatar--md');
    expect(avatar).not.toBeNull();
  });

  it('renders lg size', async () => {
    const page = await newSpecPage({
      components: [ArcAvatar],
      html: '<arc-avatar size="lg" name="A"></arc-avatar>',
    });

    const avatar = page.root!.shadowRoot!.querySelector('.avatar--lg');
    expect(avatar).not.toBeNull();
  });

  it('renders xl size', async () => {
    const page = await newSpecPage({
      components: [ArcAvatar],
      html: '<arc-avatar size="xl" name="A"></arc-avatar>',
    });

    const avatar = page.root!.shadowRoot!.querySelector('.avatar--xl');
    expect(avatar).not.toBeNull();
  });

  it('renders circle shape by default', async () => {
    const page = await newSpecPage({
      components: [ArcAvatar],
      html: '<arc-avatar name="A"></arc-avatar>',
    });

    const avatar = page.root!.shadowRoot!.querySelector('.avatar--circle');
    expect(avatar).not.toBeNull();
  });

  it('renders square shape', async () => {
    const page = await newSpecPage({
      components: [ArcAvatar],
      html: '<arc-avatar shape="square" name="A"></arc-avatar>',
    });

    const avatar = page.root!.shadowRoot!.querySelector('.avatar--square');
    expect(avatar).not.toBeNull();
  });

  it('extracts initials correctly from full name', async () => {
    const page = await newSpecPage({
      components: [ArcAvatar],
      html: '<arc-avatar name="John Doe"></arc-avatar>',
    });

    const initials = page.root!.shadowRoot!.querySelector('.avatar-initials');
    expect(initials!.textContent).toBe('JD');
  });

  it('extracts single initial from single name', async () => {
    const page = await newSpecPage({
      components: [ArcAvatar],
      html: '<arc-avatar name="John"></arc-avatar>',
    });

    const initials = page.root!.shadowRoot!.querySelector('.avatar-initials');
    expect(initials!.textContent).toBe('J');
  });

  it('extracts first and last initials from multi-part name', async () => {
    const page = await newSpecPage({
      components: [ArcAvatar],
      html: '<arc-avatar name="Mary Jane Watson"></arc-avatar>',
    });

    const initials = page.root!.shadowRoot!.querySelector('.avatar-initials');
    expect(initials!.textContent).toBe('MW');
  });
});
