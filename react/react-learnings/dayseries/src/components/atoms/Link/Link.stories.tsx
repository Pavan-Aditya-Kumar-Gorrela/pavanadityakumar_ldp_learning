import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  args: { children: 'Read more...', href: '#', variant: 'inline' },
} satisfies Meta<typeof Link>;
export default meta;

type Story = StoryObj<typeof Link>;
export const Inline: Story = {};
export const Standalone: Story = { args: { variant: 'standalone' } };