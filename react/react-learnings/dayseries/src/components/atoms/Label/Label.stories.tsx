import type { Meta, StoryObj } from '@storybook/react-vite';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { children: 'Email Address', required: false },
} satisfies Meta<typeof Label>;
export default meta;

type Story = StoryObj<typeof Label>;
export const Default: Story = {};
export const Required: Story = { args: { required: true } };