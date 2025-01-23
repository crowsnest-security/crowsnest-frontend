import type { Meta, StoryObj } from '@storybook/react';

import { HeaderLogin as HeaderLoginComponent } from './HeaderLogin';

const meta: Meta<typeof HeaderLoginComponent> = {
  component: HeaderLoginComponent,
};

export default meta;
type Story = StoryObj<typeof HeaderLoginComponent>;

export const HeaderLogin: Story = {
  render: () => <HeaderLoginComponent />,
};
