import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta = {
  title: 'Components/ArcModal',
  component: 'arc-modal',
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Whether the modal is open',
      table: { defaultValue: { summary: 'false' } },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Modal size variant',
      table: { defaultValue: { summary: 'md' } },
    },
    closeOnOverlay: {
      control: 'boolean',
      description: 'Whether clicking the overlay closes the modal',
      table: { defaultValue: { summary: 'true' } },
    },
    closeOnEscape: {
      control: 'boolean',
      description: 'Whether pressing Escape closes the modal',
      table: { defaultValue: { summary: 'true' } },
    },
  },
  args: {
    open: false,
    size: 'md',
    closeOnOverlay: true,
    closeOnEscape: true,
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <arc-button
      variant="primary"
      @click=${(e: Event) => {
        const modal = (e.target as HTMLElement).parentElement?.querySelector('arc-modal');
        if (modal) modal.setAttribute('open', '');
      }}
    >Open Modal</arc-button>
    <arc-modal
      size=${args.size}
      ?close-on-overlay=${args.closeOnOverlay}
      ?close-on-escape=${args.closeOnEscape}
    >
      <div slot="header">
        <h2 style="margin: 0; font-size: 20px; font-weight: 600;">Modal Title</h2>
      </div>
      <p style="margin: 0; color: var(--arc-color-neutral-600); line-height: 1.6;">
        This is the modal body content. You can place any content here including forms,
        text, images, or other components.
      </p>
      <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
        <arc-button variant="ghost">Cancel</arc-button>
        <arc-button variant="primary">Confirm</arc-button>
      </div>
    </arc-modal>
  `,
} satisfies StoryObj;

function openModalBySize(e: Event, size: string): void {
  const wrapper = (e.target as HTMLElement).closest('div');
  const modals = wrapper?.querySelectorAll('arc-modal');
  modals?.forEach((m) => {
    if (m.getAttribute('size') === size) m.setAttribute('open', '');
  });
}

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; flex-wrap: wrap;">
      <arc-button variant="outline" @click=${(e: Event) => openModalBySize(e, 'sm')}>Open SM</arc-button>
      <arc-modal size="sm">
        <div slot="header"><h2 style="margin: 0; font-size: 20px;">SM Modal</h2></div>
        <p style="margin: 0; color: var(--arc-color-neutral-600);">This is a small modal.</p>
        <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
          <arc-button variant="ghost">Close</arc-button>
        </div>
      </arc-modal>

      <arc-button variant="outline" @click=${(e: Event) => openModalBySize(e, 'md')}>Open MD</arc-button>
      <arc-modal size="md">
        <div slot="header"><h2 style="margin: 0; font-size: 20px;">MD Modal</h2></div>
        <p style="margin: 0; color: var(--arc-color-neutral-600);">This is a medium modal.</p>
        <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
          <arc-button variant="ghost">Close</arc-button>
        </div>
      </arc-modal>

      <arc-button variant="outline" @click=${(e: Event) => openModalBySize(e, 'lg')}>Open LG</arc-button>
      <arc-modal size="lg">
        <div slot="header"><h2 style="margin: 0; font-size: 20px;">LG Modal</h2></div>
        <p style="margin: 0; color: var(--arc-color-neutral-600);">This is a large modal.</p>
        <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
          <arc-button variant="ghost">Close</arc-button>
        </div>
      </arc-modal>

      <arc-button variant="outline" @click=${(e: Event) => openModalBySize(e, 'full')}>Open FULL</arc-button>
      <arc-modal size="full">
        <div slot="header"><h2 style="margin: 0; font-size: 20px;">Full Modal</h2></div>
        <p style="margin: 0; color: var(--arc-color-neutral-600);">This is a full-width modal.</p>
        <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
          <arc-button variant="ghost">Close</arc-button>
        </div>
      </arc-modal>
    </div>
  `,
} satisfies StoryObj;

export const WithCustomContent: Story = {
  render: () => html`
    <arc-button
      variant="primary"
      @click=${(e: Event) => {
        const modal = (e.target as HTMLElement).parentElement?.querySelector('arc-modal');
        if (modal) modal.setAttribute('open', '');
      }}
    >Open Form Modal</arc-button>
    <arc-modal size="md">
      <div slot="header">
        <h2 style="margin: 0; font-size: 20px; font-weight: 600;">Create Account</h2>
        <p style="margin: 4px 0 0; font-size: 14px; color: var(--arc-color-neutral-500);">
          Fill in the details below to get started.
        </p>
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <arc-input label="Full Name" placeholder="John Doe" required></arc-input>
        <arc-input label="Email" type="email" placeholder="john@example.com" required></arc-input>
        <arc-input label="Password" type="password" placeholder="At least 8 characters" helper-text="Must contain letters and numbers"></arc-input>
      </div>
      <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
        <arc-button variant="ghost">Cancel</arc-button>
        <arc-button variant="primary">Create Account</arc-button>
      </div>
    </arc-modal>
  `,
} satisfies StoryObj;
