import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta ={
    title:'Atoms/Avatar',
    component:Avatar,
    parameters:{
        layout:'centered'
    },
    tags:['autodocs'],
    argTypes:{
        size:{
            control:{ type:'select' },
            options:['small','medium','large']
        }

    }

} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args:{
        src:'https://via.placeholder.com/150',
        alt:'Default Avatar',
        size:'medium'
    }
};

