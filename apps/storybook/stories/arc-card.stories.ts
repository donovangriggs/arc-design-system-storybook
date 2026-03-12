import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta = {
  title: 'Components/ArcCard',
  component: 'arc-card',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'elevated', 'outlined'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'default' } },
    },
    padding: {
      control: { type: 'select' },
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Inner padding size',
      table: { defaultValue: { summary: 'md' } },
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the card is interactive/clickable',
      table: { defaultValue: { summary: 'false' } },
    },
  },
  args: {
    variant: 'default',
    padding: 'md',
    clickable: false,
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <arc-card variant=${args.variant} padding=${args.padding} ?clickable=${args.clickable}>
      <p style="margin: 0; color: var(--arc-color-neutral-700);">
        This is a default card with some sample content. Cards are used to group related information together.
      </p>
    </arc-card>
  `,
} satisfies StoryObj;

export const Elevated: Story = {
  render: () => html`
    <arc-card variant="elevated">
      <p style="margin: 0; color: var(--arc-color-neutral-700);">
        An elevated card with a shadow to create visual depth and hierarchy.
      </p>
    </arc-card>
  `,
} satisfies StoryObj;

export const Outlined: Story = {
  render: () => html`
    <arc-card variant="outlined">
      <p style="margin: 0; color: var(--arc-color-neutral-700);">
        An outlined card with a visible border for clear visual separation.
      </p>
    </arc-card>
  `,
} satisfies StoryObj;

export const Clickable: Story = {
  render: () => html`
    <arc-card variant="elevated" clickable>
      <p style="margin: 0; color: var(--arc-color-neutral-700);">
        This card is clickable. Hover over it to see the interactive state.
      </p>
    </arc-card>
  `,
} satisfies StoryObj;

export const WithContent: Story = {
  render: () => html`
    <arc-card variant="outlined" padding="lg" style="max-width: 400px;">
      <div slot="header">
        <h3 style="margin: 0 0 4px 0; font-size: 18px; font-weight: 600; color: var(--arc-color-neutral-900);">
          Card Title
        </h3>
        <p style="margin: 0; font-size: 14px; color: var(--arc-color-neutral-500);">
          Subtitle or description
        </p>
      </div>
      <p style="margin: 0; color: var(--arc-color-neutral-700); line-height: 1.5;">
        This card demonstrates the use of header, body, and footer slots.
        You can place any content in each section to build rich card layouts.
      </p>
      <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
        <arc-button variant="ghost" size="sm">Cancel</arc-button>
        <arc-button variant="primary" size="sm">Confirm</arc-button>
      </div>
    </arc-card>
  `,
} satisfies StoryObj;
