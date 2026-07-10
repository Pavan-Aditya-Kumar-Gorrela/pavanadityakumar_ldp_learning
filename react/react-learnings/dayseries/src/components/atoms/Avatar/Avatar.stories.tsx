import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  args: { fallback: 'JD', size: 'medium' },
} satisfies Meta<typeof Avatar>;
export default meta;

type Story = StoryObj<typeof Avatar>;
export const ImageAvatar: Story = { args: { src: 'https://picsum.photos/100' } };
export const FallbackAvatar: Story = {};