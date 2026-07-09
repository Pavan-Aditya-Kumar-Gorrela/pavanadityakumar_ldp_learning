import type { Meta, StoryObj } from '@storybook/react-vite';
import Badge from './Badge';

const meta = {
    title: 'Atoms/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: ['default', 'success', 'danger', 'warning', 'info'],
        },
        size: {
            control: { type: 'select' },
            options: ['small', 'medium', 'large'],
        },
        className: { control: 'text' },
    },

} satisfies Meta<typeof Badge>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Default Badge',
        variant: 'default',
        size: 'medium',
    },
};

export const Success: Story = {
    args: {
        children: 'Success Badge',
        variant: 'success',
        size: 'medium',
    },
};

export const Danger: Story = {
    args: {
        children: 'Danger Badge',
        variant: 'danger',
        size: 'medium',
    },
};

export const Warning: Story = {
    args: {
        children: 'Warning Badge',
        variant: 'warning',
        size: 'medium',
    },
};

export const Info: Story = {
    args: {
        children: 'Info Badge',
        variant: 'info',
        size: 'medium',
    },
};

export const Small: Story = {
    args: {
        children: 'Small Badge',
        variant: 'default',
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        children: 'Large Badge',
        variant: 'default',
        size: 'large',
    },
};

export const Medium: Story = {
    args: {
        children: 'Medium Badge',
        variant: 'default',
        size: 'medium',
    },
};
