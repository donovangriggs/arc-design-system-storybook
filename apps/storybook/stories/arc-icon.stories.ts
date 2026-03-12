import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const ALL_ICONS = [
  'chevron-down',
  'chevron-up',
  'chevron-left',
  'chevron-right',
  'x',
  'check',
  'plus',
  'minus',
  'search',
  'menu',
  'user',
  'heart',
  'star',
  'info',
  'alert-triangle',
] as const;

const meta = {
  title: 'Components/ArcIcon',
  component: 'arc-icon',
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: [...ALL_ICONS],
      description: 'Name of the icon to render',
    },
    size: {
      control: { type: 'number', min: 12, max: 64, step: 4 },
      description: 'Size of the icon in pixels',
      table: { defaultValue: { summary: '24' } },
    },
    color: {
      control: 'color',
      description: 'Stroke color',
      table: { defaultValue: { summary: 'currentColor' } },
    },
    strokeWidth: {
      control: { type: 'number', min: 0.5, max: 4, step: 0.5 },
      description: 'Stroke width',
      table: { defaultValue: { summary: '2' } },
    },
  },
  args: {
    name: 'star',
    size: 24,
    color: 'currentColor',
    strokeWidth: 2,
  },
  render: (args) => html`
    <arc-icon
      name=${args.name}
      size=${args.size}
      color=${args.color}
      stroke-width=${args.strokeWidth}
    ></arc-icon>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {} satisfies StoryObj;

export const AllIcons: Story = {
  render: () => html`
    <div style="
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 24px;
      padding: 16px;
    ">
      ${ALL_ICONS.map(
        (name) => html`
          <div style="
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 8px;
            padding: 16px;
            border-radius: 8px;
            border: 1px solid var(--arc-color-neutral-200, #e4e4e7);
          ">
            <arc-icon name=${name} size="24"></arc-icon>
            <span style="font-size: 11px; color: var(--arc-color-neutral-500, #71717a); font-family: monospace;">
              ${name}
            </span>
          </div>
        `,
      )}
    </div>
  `,
} satisfies StoryObj;

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 20px; align-items: center;">
      ${[12, 16, 20, 24, 32, 40, 48].map(
        (size) => html`
          <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
            <arc-icon name="star" size=${size}></arc-icon>
            <span style="font-size: 11px; color: var(--arc-color-neutral-500, #71717a);">${size}px</span>
          </div>
        `,
      )}
    </div>
  `,
} satisfies StoryObj;

export const Colors: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <arc-icon name="heart" size="32" color="var(--arc-color-error-500, #ef4444)"></arc-icon>
      <arc-icon name="check" size="32" color="var(--arc-color-success-500, #22c55e)"></arc-icon>
      <arc-icon name="info" size="32" color="var(--arc-color-info-500, #3b82f6)"></arc-icon>
      <arc-icon name="alert-triangle" size="32" color="var(--arc-color-warning-500, #f59e0b)"></arc-icon>
      <arc-icon name="star" size="32" color="var(--arc-color-primary-500, #7c3aed)"></arc-icon>
      <arc-icon name="user" size="32" color="var(--arc-color-secondary-500, #14b8a6)"></arc-icon>
    </div>
  `,
} satisfies StoryObj;
