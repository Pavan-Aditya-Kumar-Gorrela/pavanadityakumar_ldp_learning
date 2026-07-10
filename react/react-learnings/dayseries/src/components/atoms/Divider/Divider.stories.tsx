import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
} satisfies Meta<typeof Divider>;
export default meta;

type Story = StoryObj<typeof Divider>;
export const Horizontal: Story = {};
export const Vertical: Story = {
  render: () => (
    <div>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
};