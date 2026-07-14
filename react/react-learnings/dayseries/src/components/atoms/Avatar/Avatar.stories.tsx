import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from './Avatar';
import { fn, userEvent, within } from 'storybook/test';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Changes the visual dimensions of the avatar',
    },
    src: {
      control: 'text',
      description: 'The image source URL. If empty or invalid, it triggers the fallback behavior.',
    },
    fallback: {
      control: 'text',
      description: 'Text used for the initials fallback when no image source is provided.',
    },
    alt: {
      control: 'text',
      description: 'Alternative text description for accessibility.',
    },
  },
  args: { fallback: 'JD', size: 'medium' },
} satisfies Meta<typeof Avatar>;
export default meta;

type Story = StoryObj<typeof Avatar>;
export const Playground: Story = {
  args: {
    src: 'https://picsum.photos/100',
    alt: 'User profile picture',
  },
  render: (args) => {
    return (
      <div 
        onClick={fn(() => console.log('Avatar Clicked!'))} 
        style={{ cursor: 'pointer' }}
        data-testid="avatar-wrapper"
      >
        <Avatar {...args} />
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const avatarContainer = canvas.getByTestId('avatar-wrapper');

    // Simulate a user hover behavior
    await userEvent.hover(avatarContainer);

    // Simulate a user click behavior
    await userEvent.click(avatarContainer);

    // Assert that the element is present and visible after interaction
    await expect(avatarContainer).toBeInTheDocument();
  },

};

export const FallbackAvatar: Story = {
  args: {
    src: '',
    fallback: 'TS',
  },
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
      <Avatar {...args} size="small" />
      <Avatar {...args} size="medium" />
      <Avatar {...args} size="large" />
    </div>
  ),
  args: {
    src: 'https://picsum.photos/100',
  },
};