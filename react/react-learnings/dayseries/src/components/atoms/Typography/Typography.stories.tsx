import type { Meta, StoryObj } from '@storybook/react-vite';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { children: 'Sphinx of black quartz, judge my vow.', variant: 'body' },
} satisfies Meta<typeof Typography>;
export default meta;

type Story = StoryObj<typeof Typography>;
export const Heading1: Story = { args: { variant: 'h1' } };
export const BodyText: Story = { args: { variant: 'body' } };