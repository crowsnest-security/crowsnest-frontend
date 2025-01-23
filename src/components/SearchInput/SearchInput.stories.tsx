import type { Meta, StoryObj } from '@storybook/react';

import { SearchInput as SearchInputComponent } from './SearchInput';

const meta: Meta<typeof SearchInputComponent> = {
  component: SearchInputComponent,
};

export default meta;

type Story = StoryObj<typeof SearchInputComponent>;

export const SearchInput: Story = {
  render: () => <SearchInputComponent />,
};
