import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { placeholder: 'Type something...', disabled: false, error: false },
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof Input>;
export const Default: Story = {};
export const Error: Story = { args: { error: true, placeholder: 'Invalid input' } };