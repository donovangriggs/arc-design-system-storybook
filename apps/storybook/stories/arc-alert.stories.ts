import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta = {
  title: 'Components/ArcAlert',
  component: 'arc-alert',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Alert variant',
      table: { defaultValue: { summary: 'info' } },
    },
    alertTitle: {
      control: 'text',
      description: 'Title text displayed in the alert',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
      table: { defaultValue: { summary: 'false' } },
    },
    icon: {
      control: 'boolean',
      description: 'Whether to show the variant icon',
      table: { defaultValue: { summary: 'true' } },
    },
    message: {
      control: 'text',
      description: 'Alert message content (slot)',
    },
  },
  args: {
    variant: 'info',
    dismissible: false,
    icon: true,
    message: 'This is an informational alert message.',
  },
  render: (args) => html`
    <div style="width: 480px;">
      <arc-alert
        variant=${args.variant}
        alert-title=${args.alertTitle || ''}
        ?dismissible=${args.dismissible}
        ?icon=${args.icon}
      >${args.message}</arc-alert>
    </div>
  `,
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px; width: 480px;">
      <arc-alert variant="info">This is an informational message for the user.</arc-alert>
      <arc-alert variant="success">The operation completed successfully.</arc-alert>
      <arc-alert variant="warning">Please review the changes before proceeding.</arc-alert>
      <arc-alert variant="error">An error occurred while processing your request.</arc-alert>
    </div>
  `,
} satisfies StoryObj;

export const Dismissible: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px; width: 480px;">
      <arc-alert variant="info" dismissible>You can dismiss this info alert.</arc-alert>
      <arc-alert variant="success" dismissible>You can dismiss this success alert.</arc-alert>
      <arc-alert variant="warning" dismissible>You can dismiss this warning alert.</arc-alert>
      <arc-alert variant="error" dismissible>You can dismiss this error alert.</arc-alert>
    </div>
  `,
} satisfies StoryObj;

export const WithHeading: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px; width: 480px;">
      <arc-alert variant="info" alert-title="Information">
        Please read the documentation before getting started with the project.
      </arc-alert>
      <arc-alert variant="success" alert-title="Deployment Complete">
        Your application has been successfully deployed to production.
      </arc-alert>
      <arc-alert variant="warning" alert-title="Storage Almost Full">
        You have used 90% of your available storage. Consider upgrading your plan.
      </arc-alert>
      <arc-alert variant="error" alert-title="Payment Failed" dismissible>
        We were unable to process your payment. Please update your billing information.
      </arc-alert>
    </div>
  `,
} satisfies StoryObj;
