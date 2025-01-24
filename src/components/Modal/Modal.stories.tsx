import { useToggle } from '@/hooks/useToggle';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';
import { ModalsActions } from './Actions';
import { ModalsContainer } from './Container';
import { ModalsContent } from './Content';

const Modal = () => {
  return <div />;
};

const meta: Meta<typeof Modal> = {
  component: Modal,
};

type Story = StoryObj<typeof Modal>;

export const PlainModal: Story = {
  render: () => {
    const { isOpen, toggle } = useToggle(true);
    return (
      <>
        <Button onClick={toggle}>Open</Button>
        <ModalsContainer
          open={isOpen}
          title="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
          style={{ width: 600 }}
        >
          <ModalsContent>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </ModalsContent>
          <ModalsActions>
            <Button onClick={toggle}>Action</Button>
          </ModalsActions>
        </ModalsContainer>
      </>
    );
  },
};

export default meta;
