import type { Meta, StoryObj } from '@storybook/react-vite';

import avatarUrl from '../../../../assets/user.png';
import type { employee } from '../../../types/employee';
import EmployeeList from './EmployeeList';

const sampleEmployees: employee[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Software Engineer',
    department: 'Engineering',
    avatarUrl,
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Product Manager',
    department: 'Product',
    avatarUrl,
  },
];

const meta = {
  component: EmployeeList,
  tags: ['ai-generated'],
} satisfies Meta<typeof EmployeeList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    employees: sampleEmployees,
  },
};