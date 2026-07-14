import type { Meta, StoryObj } from '@storybook/react-vite';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { label: 'Option Option', name: 'radio-group' },
} satisfies Meta<typeof Radio>;
export default meta;

type Story = StoryObj<typeof Radio>;
export const Default: Story = {};