import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Click Me', variant: 'primary', size: 'medium', disabled: false },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;
export const Primary: Story = {};
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Danger: Story = { args: { variant: 'danger' } };