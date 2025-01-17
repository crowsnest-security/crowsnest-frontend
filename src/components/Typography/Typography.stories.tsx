import type { Meta, StoryObj } from '@storybook/react';

import { Typography as TypographyComponent } from './Typography';

const meta: Meta<typeof TypographyComponent> = {
  component: TypographyComponent,
};

export default meta;
type Story = StoryObj<typeof TypographyComponent>;

export const Typography: Story = {
  render: () => (
    <div>
      <TypographyComponent variant="h1">
        h1: Text for typography
      </TypographyComponent>
      <TypographyComponent variant="h2">
        h2: Text for typography
      </TypographyComponent>
      <TypographyComponent variant="h3">
        h3: Text for typography
      </TypographyComponent>
      <TypographyComponent variant="h4">
        h4: Text for typography
      </TypographyComponent>
      <TypographyComponent variant="h5">
        h5: Text for typography
      </TypographyComponent>
      <TypographyComponent variant="h6">
        h6: Text for typography
      </TypographyComponent>
      <TypographyComponent variant="subtitle1">
        subtitle1: Text for typography
      </TypographyComponent>
      <TypographyComponent variant="subtitle2">
        subtitle2: Text for typography
      </TypographyComponent>
      <TypographyComponent variant="body1">
        body1: Text for typography
      </TypographyComponent>
      <TypographyComponent variant="body2">
        body2: Text for typography
      </TypographyComponent>
      <TypographyComponent variant="button">
        button: Text for typography
      </TypographyComponent>
      <br />
      <TypographyComponent variant="caption">
        caption: Text for typography
      </TypographyComponent>
      <br />
      <TypographyComponent variant="overline">
        overline: Text for typography
      </TypographyComponent>
    </div>
  ),
};
