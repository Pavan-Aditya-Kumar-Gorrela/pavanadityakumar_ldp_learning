import type { Meta, StoryObj } from '@storybook/react-vite';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  args: { min: 0, max: 100, defaultValue: 50 },
} satisfies Meta<typeof Slider>;
export default meta;

type Story = StoryObj<typeof Slider>;
export const Default: Story = {};