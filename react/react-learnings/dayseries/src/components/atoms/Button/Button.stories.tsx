import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import { expect, fn, userEvent, within } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // Formats control inputs in the Storybook UI controls panel
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'The physical size dimensions of the button',
    },
    disabled: {
      control: 'boolean',
      description: 'Sets whether the button is disabled and non-interactive',
    },
    children: {
      control: 'text',
      description: 'The text label content inside the button',
    },
  },
  // Sets default props and registers an interactive spy mock for onClick events
  args: { 
    children: 'Click Me', 
    variant: 'primary', 
    size: 'medium', 
    disabled: false,
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

/**
 * 1. Primary Interactive Sandbox
 * Automates user interactions (hovering, clicking) and asserts successful callback execution.
 */
export const Primary: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /click me/i });

    // Simulate user hover
    await userEvent.hover(button);

    // Simulate user click
    await userEvent.click(button);

    // Assert the button was found and mock handler registered the click
    await expect(button).toBeInTheDocument();
    await expect(args.onClick).toHaveBeenCalled();
  },
};

/**
 * 2. Secondary Variant Story
 * Configured specifically for the secondary button style.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Action',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /secondary action/i });

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

/**
 * 3. Danger Variant Story
 * Configured specifically for destructive or high-risk alert actions.
 */
export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete Item',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /delete item/i });

    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalled();
  },
};

/**
 * 4. Disabled State Test
 * Ensures that clicking the disabled button does not trigger any click handlers.
 */
export const DisabledState: Story = {
  args: {
    disabled: true,
    children: 'Locked Button',
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: /locked button/i });

    // Attempt a user click
    await userEvent.click(button, { pointerEventsCheck: 0 });

    // Assert that the native DOM attribute disabled is active and callback was ignored
    await expect(button).toBeDisabled();
    await expect(args.onClick).not.toHaveBeenCalled();
  },
};

/**
 * 5. Button Variant Grid
 * A static visual layout comparing all three buttons side-by-side with global props matching the control panel.
 */
export const AllVariants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="danger">Danger</Button>
    </div>
  ),
  args: {
    size: 'medium',
  },
};
