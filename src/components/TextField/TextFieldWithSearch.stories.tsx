import type { Meta, StoryObj } from '@storybook/react';

import { TextFieldWithSearch as TextFieldWithSearchComponent } from './TextFieldWithSearch';

const meta: Meta<typeof TextFieldWithSearchComponent> = {
  component: TextFieldWithSearchComponent,
};

export default meta;

type Story = StoryObj<typeof TextFieldWithSearchComponent>;

export const TextFieldWithSearch: Story = {
  render: () => <TextFieldWithSearchComponent />,
};
