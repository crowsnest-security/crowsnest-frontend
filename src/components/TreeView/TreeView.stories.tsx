import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import type { Meta, StoryObj } from '@storybook/react';

import { TreeView as TreeViewComponent } from './TreeView';

const meta: Meta<typeof TreeViewComponent> = {
  component: TreeViewComponent,
};

export default meta;

type Story = StoryObj<typeof TreeViewComponent>;

const PRODUCTS: TreeViewBaseItem[] = [
  {
    id: 'product_id_1',
    label: 'Product 1',
    children: [
      { id: 'product_1-item_1', label: 'Item 1' },
      { id: 'product_1-item_2', label: 'Item 2' },
      { id: 'product_1-item_3', label: 'Item 3' },
    ],
  },
  {
    id: 'product_id_2',
    label: 'Product 2',
    children: [
      { id: 'product_2-item_1', label: 'Item 1' },
      { id: 'product_2-item_2', label: 'Item 2' },
    ],
  },
  {
    id: 'product_id_3',
    label: 'Product 3',
    children: [{ id: 'product_3-item_1', label: 'Item 1' }],
  },
  {
    id: 'product_id_4',
    label: 'Product 4',
    children: [{ id: 'product_4-item_1', label: 'Item 1' }],
  },
];

export const TreeView: Story = {
  render: () => <TreeViewComponent items={PRODUCTS} />,
};
