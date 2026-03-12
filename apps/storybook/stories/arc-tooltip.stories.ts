import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta = {
  title: 'Components/ArcTooltip',
  component: 'arc-tooltip',
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Text content displayed in the tooltip',
    },
    position: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position of the tooltip relative to the trigger',
      table: { defaultValue: { summary: 'top' } },
    },
    delay: {
      control: { type: 'number', min: 0, max: 2000, step: 50 },
      description: 'Delay in ms before showing the tooltip',
      table: { defaultValue: { summary: '200' } },
    },
  },
  args: {
    content: 'Tooltip content',
    position: 'top',
    delay: 200,
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <arc-tooltip content=${args.content} position=${args.position} delay=${args.delay}>
      <arc-button variant="outline">Hover me</arc-button>
    </arc-tooltip>
  `,
} satisfies StoryObj;

export const AllPositions: Story = {
  render: () => html`
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; padding: 60px;">
      <div style="text-align: center;">
        <arc-tooltip content="Tooltip on top" position="top">
          <arc-button variant="outline">Top</arc-button>
        </arc-tooltip>
      </div>
      <div style="text-align: center;">
        <arc-tooltip content="Tooltip on right" position="right">
          <arc-button variant="outline">Right</arc-button>
        </arc-tooltip>
      </div>
      <div style="text-align: center;">
        <arc-tooltip content="Tooltip on bottom" position="bottom">
          <arc-button variant="outline">Bottom</arc-button>
        </arc-tooltip>
      </div>
      <div style="text-align: center;">
        <arc-tooltip content="Tooltip on left" position="left">
          <arc-button variant="outline">Left</arc-button>
        </arc-tooltip>
      </div>
    </div>
  `,
} satisfies StoryObj;

export const CustomContent: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; padding: 40px;">
      <arc-tooltip content="Save your progress" position="bottom">
        <arc-button variant="primary">
          <span style="display: flex; align-items: center; gap: 6px;">
            <arc-icon name="check" size="16"></arc-icon>
            Save
          </span>
        </arc-button>
      </arc-tooltip>
      <arc-tooltip content="Search the documentation" position="bottom">
        <arc-button variant="outline">
          <span style="display: flex; align-items: center; gap: 6px;">
            <arc-icon name="search" size="16"></arc-icon>
            Search
          </span>
        </arc-button>
      </arc-tooltip>
      <arc-tooltip content="This action cannot be undone" position="bottom">
        <arc-button variant="destructive">
          <span style="display: flex; align-items: center; gap: 6px;">
            <arc-icon name="x" size="16"></arc-icon>
            Delete
          </span>
        </arc-button>
      </arc-tooltip>
    </div>
  `,
} satisfies StoryObj;
