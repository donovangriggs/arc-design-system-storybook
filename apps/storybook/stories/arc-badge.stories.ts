import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta = {
  title: 'Components/ArcBadge',
  component: 'arc-badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info', 'neutral'],
      description: 'Color variant',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Badge size',
      table: { defaultValue: { summary: 'md' } },
    },
    dot: {
      control: 'boolean',
      description: 'Show a dot indicator instead of content',
      table: { defaultValue: { summary: 'false' } },
    },
    pill: {
      control: 'boolean',
      description: 'Use pill (fully rounded) shape',
      table: { defaultValue: { summary: 'true' } },
    },
    label: {
      control: 'text',
      description: 'Badge text content (slot)',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    dot: false,
    pill: true,
    label: 'Badge',
  },
  render: (args) => html`
    <arc-badge
      variant=${args.variant}
      size=${args.size}
      ?dot=${args.dot}
      ?pill=${args.pill}
    >${args.label}</arc-badge>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {} satisfies StoryObj;

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
      <arc-badge variant="primary">Primary</arc-badge>
      <arc-badge variant="secondary">Secondary</arc-badge>
      <arc-badge variant="success">Success</arc-badge>
      <arc-badge variant="warning">Warning</arc-badge>
      <arc-badge variant="error">Error</arc-badge>
      <arc-badge variant="info">Info</arc-badge>
      <arc-badge variant="neutral">Neutral</arc-badge>
    </div>
  `,
} satisfies StoryObj;

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; align-items: center;">
      <arc-badge size="sm">Small</arc-badge>
      <arc-badge size="md">Medium</arc-badge>
      <arc-badge size="lg">Large</arc-badge>
    </div>
  `,
} satisfies StoryObj;

export const DotIndicator: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
      <arc-badge variant="primary" dot></arc-badge>
      <arc-badge variant="success" dot></arc-badge>
      <arc-badge variant="warning" dot></arc-badge>
      <arc-badge variant="error" dot></arc-badge>
      <arc-badge variant="info" dot></arc-badge>
    </div>
  `,
} satisfies StoryObj;
