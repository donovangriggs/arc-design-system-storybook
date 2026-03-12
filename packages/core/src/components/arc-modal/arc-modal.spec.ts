import { newSpecPage } from '@stencil/core/testing';
import { ArcModal } from './arc-modal';

describe('arc-modal', () => {
  it('is not visible when open=false', async () => {
    const page = await newSpecPage({
      components: [ArcModal],
      html: '<arc-modal></arc-modal>',
    });
    const overlay = page.root!.shadowRoot!.querySelector('.overlay');
    expect(overlay).not.toHaveClass('open');
  });

  it('is visible when open=true', async () => {
    const page = await newSpecPage({
      components: [ArcModal],
      html: '<arc-modal open></arc-modal>',
    });
    const overlay = page.root!.shadowRoot!.querySelector('.overlay');
    expect(overlay).toHaveClass('open');
  });

  it('renders header slot', async () => {
    const page = await newSpecPage({
      components: [ArcModal],
      html: '<arc-modal open><span slot="header">Title</span></arc-modal>',
    });
    const header = page.root!.shadowRoot!.querySelector('.header');
    expect(header).not.toBeNull();
    const slot = header!.querySelector('slot[name="header"]');
    expect(slot).not.toBeNull();
  });

  it('renders footer slot', async () => {
    const page = await newSpecPage({
      components: [ArcModal],
      html: '<arc-modal open><span slot="footer">Actions</span></arc-modal>',
    });
    const footer = page.root!.shadowRoot!.querySelector('.footer');
    expect(footer).not.toBeNull();
    const slot = footer!.querySelector('slot[name="footer"]');
    expect(slot).not.toBeNull();
  });

  it('close button emits arcClose', async () => {
    const page = await newSpecPage({
      components: [ArcModal],
      html: '<arc-modal open></arc-modal>',
    });
    const spy = jest.fn();
    page.root!.addEventListener('arcClose', spy);

    const closeBtn = page.root!.shadowRoot!.querySelector('.close-button') as HTMLButtonElement;
    closeBtn.click();
    await page.waitForChanges();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('overlay click emits arcClose when closeOnOverlay=true', async () => {
    const page = await newSpecPage({
      components: [ArcModal],
      html: '<arc-modal open></arc-modal>',
    });
    const spy = jest.fn();
    page.root!.addEventListener('arcClose', spy);

    const overlay = page.root!.shadowRoot!.querySelector('.overlay') as HTMLElement;
    overlay.click();
    await page.waitForChanges();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('overlay click does NOT emit arcClose when closeOnOverlay=false', async () => {
    const page = await newSpecPage({
      components: [ArcModal],
      html: '<arc-modal open close-on-overlay="false"></arc-modal>',
    });
    const spy = jest.fn();
    page.root!.addEventListener('arcClose', spy);

    const overlay = page.root!.shadowRoot!.querySelector('.overlay') as HTMLElement;
    overlay.click();
    await page.waitForChanges();

    expect(spy).not.toHaveBeenCalled();
  });

  it('size variants apply correct class', async () => {
    const sizes = ['sm', 'md', 'lg', 'full'] as const;

    for (const size of sizes) {
      const page = await newSpecPage({
        components: [ArcModal],
        html: `<arc-modal open size="${size}"></arc-modal>`,
      });
      const modal = page.root!.shadowRoot!.querySelector('.modal');
      expect(modal).toHaveClass(`size-${size}`);
    }
  });
});
