import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { name: 'search', size: 24, color: '#333333' },
} satisfies Meta<typeof Icon>;
export default meta;

type Story = StoryObj<typeof Icon>;
export const Search: Story = {};
export const Check: Story = { args: { name: 'check', color: 'green' } };