import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta = {
  title: 'Components/ArcButton',
  component: 'arc-button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive'],
      description: 'Visual style variant',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
      table: { defaultValue: { summary: 'md' } },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: { defaultValue: { summary: 'false' } },
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is in a loading state',
      table: { defaultValue: { summary: 'false' } },
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type attribute',
      table: { defaultValue: { summary: 'button' } },
    },
    label: {
      control: 'text',
      description: 'Button text content (slot)',
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    type: 'button',
    label: 'Button',
  },
  render: (args) => html`
    <arc-button
      variant=${args.variant}
      size=${args.size}
      ?disabled=${args.disabled}
      ?loading=${args.loading}
      type=${args.type}
    >${args.label}</arc-button>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {} satisfies StoryObj;

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
      <arc-button variant="primary">Primary</arc-button>
      <arc-button variant="secondary">Secondary</arc-button>
      <arc-button variant="outline">Outline</arc-button>
      <arc-button variant="ghost">Ghost</arc-button>
      <arc-button variant="destructive">Destructive</arc-button>
    </div>
  `,
} satisfies StoryObj;

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <arc-button size="sm">Small</arc-button>
      <arc-button size="md">Medium</arc-button>
      <arc-button size="lg">Large</arc-button>
    </div>
  `,
} satisfies StoryObj;

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
      <arc-button variant="primary" disabled>Primary</arc-button>
      <arc-button variant="secondary" disabled>Secondary</arc-button>
      <arc-button variant="outline" disabled>Outline</arc-button>
      <arc-button variant="ghost" disabled>Ghost</arc-button>
      <arc-button variant="destructive" disabled>Destructive</arc-button>
    </div>
  `,
} satisfies StoryObj;

export const Loading: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
      <arc-button variant="primary" loading>Primary</arc-button>
      <arc-button variant="secondary" loading>Secondary</arc-button>
      <arc-button variant="outline" loading>Outline</arc-button>
    </div>
  `,
} satisfies StoryObj;

export const WithIcon: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <arc-button variant="primary">
        <span style="display: flex; align-items: center; gap: 6px;">
          <arc-icon name="plus" size="16"></arc-icon>
          Add Item
        </span>
      </arc-button>
      <arc-button variant="outline">
        <span style="display: flex; align-items: center; gap: 6px;">
          <arc-icon name="search" size="16"></arc-icon>
          Search
        </span>
      </arc-button>
      <arc-button variant="destructive">
        <span style="display: flex; align-items: center; gap: 6px;">
          <arc-icon name="x" size="16"></arc-icon>
          Delete
        </span>
      </arc-button>
    </div>
  `,
} satisfies StoryObj;

export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    type: 'button',
    label: 'Playground Button',
  },
} satisfies StoryObj;
