import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta = {
  title: 'Components/ArcInput',
  component: 'arc-input',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'search', 'number', 'tel', 'url'],
      description: 'Input type',
      table: { defaultValue: { summary: 'text' } },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Input size',
      table: { defaultValue: { summary: 'md' } },
    },
    label: {
      control: 'text',
      description: 'Label text displayed above the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the input',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message displayed below the input',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
      table: { defaultValue: { summary: 'false' } },
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
  },
  args: {
    type: 'text',
    size: 'md',
    placeholder: 'Enter text...',
    disabled: false,
    required: false,
    value: '',
  },
  render: (args) => html`
    <div style="width: 320px;">
      <arc-input
        type=${args.type}
        size=${args.size}
        placeholder=${args.placeholder || ''}
        label=${args.label || ''}
        helper-text=${args.helperText || ''}
        error-message=${args.errorMessage || ''}
        ?disabled=${args.disabled}
        ?required=${args.required}
        value=${args.value || ''}
      ></arc-input>
    </div>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
} satisfies StoryObj;

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'you@example.com',
  },
} satisfies StoryObj;

export const WithError: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    value: 'invalid-email',
    errorMessage: 'Please enter a valid email address',
  },
} satisfies StoryObj;

export const WithHelper: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters long',
  },
} satisfies StoryObj;

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    value: 'Cannot edit this',
    disabled: true,
  },
} satisfies StoryObj;

export const AllTypes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 320px;">
      <arc-input type="text" label="Text" placeholder="Text input"></arc-input>
      <arc-input type="email" label="Email" placeholder="you@example.com"></arc-input>
      <arc-input type="password" label="Password" placeholder="Enter password"></arc-input>
      <arc-input type="search" label="Search" placeholder="Search..."></arc-input>
      <arc-input type="number" label="Number" placeholder="0"></arc-input>
      <arc-input type="tel" label="Telephone" placeholder="+1 (555) 000-0000"></arc-input>
      <arc-input type="url" label="URL" placeholder="https://example.com"></arc-input>
    </div>
  `,
} satisfies StoryObj;

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; width: 320px;">
      <arc-input size="sm" label="Small" placeholder="Small input"></arc-input>
      <arc-input size="md" label="Medium" placeholder="Medium input"></arc-input>
      <arc-input size="lg" label="Large" placeholder="Large input"></arc-input>
    </div>
  `,
} satisfies StoryObj;
