import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusPill } from './StatusPill';

const meta: Meta<typeof StatusPill> = {
  title: 'Components/StatusPill',
  component: StatusPill,
  args: { status: 'success', children: 'Active' },
} satisfies Meta<typeof StatusPill>;
export default meta;

type Story = StoryObj<typeof StatusPill>;
export const Success: Story = {};
export const Warning: Story = { args: { status: 'warning', children: 'Pending' } };
export const Error: Story = { args: { status: 'error', children: 'Failed' } };