import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Tabs as TabsComponent } from './Tabs';

const meta: Meta<typeof TabsComponent> = {
  component: TabsComponent,
};

export default meta;
type Story = StoryObj<typeof TabsComponent>;

const TAB_ONE_VALUE = 0;
const TAB_TWO_VALUE = 1;

const TAB_THREE_VALUE = 2;

const TABS = [
  {
    label: 'Tab Label 1',
    value: TAB_ONE_VALUE,
  },
  {
    label: 'Tab Label 2',
    value: TAB_TWO_VALUE,
  },
  {
    label: 'Tab Label 3',
    value: TAB_THREE_VALUE,
  },
];

export const Tabs: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <TabsComponent
        value={value}
        onChange={handleChange}
        withBackground
        tabs={TABS}
      />
    );
  },
};
