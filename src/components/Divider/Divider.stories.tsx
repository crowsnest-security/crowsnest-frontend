import type { Meta, StoryObj } from '@storybook/react';

import { Divider as DividerComponent } from './Divider';

const meta: Meta<typeof DividerComponent> = {
  component: DividerComponent,
};

export default meta;
type Story = StoryObj<typeof DividerComponent>;

export const Divider: Story = {
  render: () => (
    <div>
      <DividerComponent />
    </div>
  ),
};

export const DividerWithText: Story = {
  render: () => (
    <div>
      <DividerComponent>Some text in the middle</DividerComponent>
    </div>
  ),
};
