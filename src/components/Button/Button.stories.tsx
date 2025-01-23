import type { Meta, StoryObj } from '@storybook/react';

import { Button as ButtonComponent } from './Button';

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  argTypes: {
    variant: {
      options: ['contained', 'outlined', 'text'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const Button: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
  },
};
