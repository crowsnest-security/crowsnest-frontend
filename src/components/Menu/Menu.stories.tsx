import { useMenu } from '@/hooks/useMenu';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { Menu as MenuComponent, MenuItem } from './Menu';

const meta: Meta<typeof MenuComponent> = {
  component: MenuComponent,
};

type Story = StoryObj<typeof MenuComponent>;

const MENU_ITEMS: Array<MenuItem> = [
  { content: 'Item 1', onClick: () => {} },
  { content: 'Item 2', onClick: () => {} },
  { content: 'Item 3', onClick: () => {} },
];

export const Menu: Story = {
  render: () => {
    const { anchorElement, isOpen, setAnchorElement } = useMenu();

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElement(event.currentTarget);
    };
    const handleClose = () => setAnchorElement(null);

    return (
      <>
        <Button onClick={handleOpen}>Open Menu</Button>
        <MenuComponent
          items={MENU_ITEMS}
          anchorEl={anchorElement}
          open={isOpen}
          onClose={handleClose}
        />
      </>
    );
  },
};

export default meta;
