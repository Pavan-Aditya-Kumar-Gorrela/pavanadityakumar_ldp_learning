import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  args: { children: 'Data point', isHeader: false, align: 'left' },
} satisfies Meta<typeof TableCell>;
export default meta;

type Story = StoryObj<typeof TableCell>;
export const DataCell: Story = {};
export const HeaderCell: Story = { args: { isHeader: true, children: 'Header Title' } };