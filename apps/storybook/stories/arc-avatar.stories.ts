import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta = {
  title: 'Components/ArcAvatar',
  component: 'arc-avatar',
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for the image',
    },
    name: {
      control: 'text',
      description: 'User name (used for initials fallback)',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Avatar size',
      table: { defaultValue: { summary: 'md' } },
    },
    shape: {
      control: { type: 'select' },
      options: ['circle', 'square'],
      description: 'Avatar shape',
      table: { defaultValue: { summary: 'circle' } },
    },
  },
  args: {
    size: 'md',
    shape: 'circle',
    name: '',
    src: '',
    alt: '',
  },
  render: (args) => html`
    <arc-avatar
      src=${args.src || ''}
      alt=${args.alt || ''}
      name=${args.name || ''}
      size=${args.size}
      shape=${args.shape}
    ></arc-avatar>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    name: 'Jane Doe',
  },
} satisfies StoryObj;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=arc-design-system',
    alt: 'User avatar',
    name: 'Jane Doe',
  },
} satisfies StoryObj;

export const WithInitials: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <arc-avatar name="Jane Doe"></arc-avatar>
      <arc-avatar name="Alex Smith"></arc-avatar>
      <arc-avatar name="ArcTech"></arc-avatar>
      <arc-avatar name="B"></arc-avatar>
    </div>
  `,
} satisfies StoryObj;

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <arc-avatar size="xs" name="XS"></arc-avatar>
      <arc-avatar size="sm" name="SM"></arc-avatar>
      <arc-avatar size="md" name="MD"></arc-avatar>
      <arc-avatar size="lg" name="LG"></arc-avatar>
      <arc-avatar size="xl" name="XL"></arc-avatar>
    </div>
  `,
} satisfies StoryObj;

export const AllShapes: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <div style="text-align: center;">
        <arc-avatar shape="circle" name="Jane Doe" size="lg"></arc-avatar>
        <p style="margin: 8px 0 0; font-size: 12px; color: var(--arc-color-neutral-500);">Circle</p>
      </div>
      <div style="text-align: center;">
        <arc-avatar shape="square" name="Jane Doe" size="lg"></arc-avatar>
        <p style="margin: 8px 0 0; font-size: 12px; color: var(--arc-color-neutral-500);">Square</p>
      </div>
    </div>
  `,
} satisfies StoryObj;
