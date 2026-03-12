import { newSpecPage } from '@stencil/core/testing';
import { ArcAlert } from './arc-alert';

describe('arc-alert', () => {
  it('renders with default props (info variant)', async () => {
    const page = await newSpecPage({
      components: [ArcAlert],
      html: '<arc-alert>Some info message</arc-alert>',
    });

    const alert = page.root!.shadowRoot!.querySelector('.alert');
    expect(alert).not.toBeNull();
    expect(alert!.classList.contains('alert--info')).toBe(true);

    const icon = page.root!.shadowRoot!.querySelector('.alert-icon');
    expect(icon).not.toBeNull();
  });

  it('renders success variant', async () => {
    const page = await newSpecPage({
      components: [ArcAlert],
      html: '<arc-alert variant="success">Success!</arc-alert>',
    });

    const alert = page.root!.shadowRoot!.querySelector('.alert--success');
    expect(alert).not.toBeNull();
  });

  it('renders warning variant', async () => {
    const page = await newSpecPage({
      components: [ArcAlert],
      html: '<arc-alert variant="warning">Warning!</arc-alert>',
    });

    const alert = page.root!.shadowRoot!.querySelector('.alert--warning');
    expect(alert).not.toBeNull();
  });

  it('renders error variant', async () => {
    const page = await newSpecPage({
      components: [ArcAlert],
      html: '<arc-alert variant="error">Error!</arc-alert>',
    });

    const alert = page.root!.shadowRoot!.querySelector('.alert--error');
    expect(alert).not.toBeNull();
  });

  it('shows title when provided', async () => {
    const page = await newSpecPage({
      components: [ArcAlert],
      html: '<arc-alert alert-title="Important Notice">Details here</arc-alert>',
    });

    const title = page.root!.shadowRoot!.querySelector('.alert-title');
    expect(title).not.toBeNull();
    expect(title!.textContent).toBe('Important Notice');
  });

  it('does not show title when not provided', async () => {
    const page = await newSpecPage({
      components: [ArcAlert],
      html: '<arc-alert>Just a message</arc-alert>',
    });

    const title = page.root!.shadowRoot!.querySelector('.alert-title');
    expect(title).toBeNull();
  });

  it('shows dismiss button when dismissible', async () => {
    const page = await newSpecPage({
      components: [ArcAlert],
      html: '<arc-alert dismissible>Dismissible alert</arc-alert>',
    });

    const dismissBtn = page.root!.shadowRoot!.querySelector('.alert-dismiss');
    expect(dismissBtn).not.toBeNull();
    expect(dismissBtn!.getAttribute('aria-label')).toBe('Dismiss alert');
  });

  it('does not show dismiss button by default', async () => {
    const page = await newSpecPage({
      components: [ArcAlert],
      html: '<arc-alert>Not dismissible</arc-alert>',
    });

    const dismissBtn = page.root!.shadowRoot!.querySelector('.alert-dismiss');
    expect(dismissBtn).toBeNull();
  });

  it('hides alert on dismiss click and emits event', async () => {
    const page = await newSpecPage({
      components: [ArcAlert],
      html: '<arc-alert dismissible>Dismiss me</arc-alert>',
    });

    const spy = jest.fn();
    page.root!.addEventListener('arcDismiss', spy);

    const dismissBtn = page.root!.shadowRoot!.querySelector('.alert-dismiss') as HTMLButtonElement;
    dismissBtn.click();
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();

    const alert = page.root!.shadowRoot!.querySelector('.alert');
    expect(alert).toBeNull();
  });

  it('hides icon when icon prop is false', async () => {
    const page = await newSpecPage({
      components: [ArcAlert],
      html: '<arc-alert icon="false">No icon</arc-alert>',
    });

    // icon prop is boolean, set via attribute as string "false"
    // Need to set it programmatically
    page.root!.icon = false;
    await page.waitForChanges();

    const icon = page.root!.shadowRoot!.querySelector('.alert-icon');
    expect(icon).toBeNull();
  });

  it('renders action slot', async () => {
    const page = await newSpecPage({
      components: [ArcAlert],
      html: `
        <arc-alert>
          Alert message
          <button slot="action">Retry</button>
        </arc-alert>
      `,
    });

    const actionSlot = page.root!.shadowRoot!.querySelector('.alert-action slot[name="action"]');
    expect(actionSlot).not.toBeNull();
  });

  it('renders default slot for message content', async () => {
    const page = await newSpecPage({
      components: [ArcAlert],
      html: '<arc-alert>Message content here</arc-alert>',
    });

    const message = page.root!.shadowRoot!.querySelector('.alert-message');
    expect(message).not.toBeNull();

    const slot = message!.querySelector('slot');
    expect(slot).not.toBeNull();
  });
});
