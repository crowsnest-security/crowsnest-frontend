import AvatarImage from '@/assets/avatar.png';
import CancelIcon from '@/assets/cancel-filled-icon.svg';
import CheckIcon from '@/assets/check-circle-filled-icon.svg';
import DownloadIcon from '@/assets/download_icon.svg?react';
import WatchIcon from '@/assets/visibility_icon.svg?react';
import { Box, IconButton } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../Card';
import { Typography } from '../Typography';
import { Carousel as CarouselComponent } from './Carousel';

const meta: Meta<typeof CarouselComponent> = {
  component: CarouselComponent,
};

export default meta;
type Story = StoryObj<typeof CarouselComponent>;

const CARD_ITEMS = [
  {
    title: 'Some card title 1',
    avatar: AvatarImage,
    status: false,
    content: {
      title: 'Key capabilities',
      items: [
        { checked: true, title: 'Capability name 1' },
        { checked: false, title: 'Capability name 2' },
        { checked: true, title: 'Capability name 3' },
      ],
    },
  },
  {
    title: 'Some card title 2',
    avatar: AvatarImage,
    status: false,
    content: {
      title: 'Key capabilities',
      items: [
        { checked: true, title: 'Capability name 1' },
        { checked: false, title: 'Capability name 2' },
        { checked: true, title: 'Capability name 3' },
      ],
    },
  },
  {
    title: 'Some card title 3',
    avatar: AvatarImage,
    status: false,
    content: {
      title: 'Key capabilities',
      items: [
        { checked: true, title: 'Capability name 1' },
        { checked: false, title: 'Capability name 2' },
        { checked: true, title: 'Capability name 3' },
      ],
    },
  },
  {
    title: 'Some card title 4',
    avatar: AvatarImage,
    status: false,
    content: {
      title: 'Key capabilities',
      items: [
        { checked: true, title: 'Capability name 1' },
        { checked: false, title: 'Capability name 2' },
        { checked: true, title: 'Capability name 3' },
      ],
    },
  },
  {
    title: 'Some card title 5',
    avatar: AvatarImage,
    status: false,
    content: {
      title: 'Key capabilities',
      items: [
        { checked: true, title: 'Capability name 1' },
        { checked: false, title: 'Capability name 2' },
        { checked: true, title: 'Capability name 3' },
      ],
    },
  },
];

type ContentItemProps = {
  checked: boolean;
  title: string;
};

const ContentItem: React.FC<ContentItemProps> = ({ checked, title }) => {
  return (
    <Box
      style={{
        display: 'flex',
        width: 250,
        height: 42,
        padding: '8px 5px 10px 0px',
        alignItems: 'center',
        gap: 9,
        flexShrink: 0,
      }}
    >
      {checked ? <CheckIcon /> : <CancelIcon />}
      <Typography variant="caption" sx={{ textTransform: 'uppercase' }}>
        {title}
      </Typography>
    </Box>
  );
};

export const Carousel: Story = {
  render: () => (
    <CarouselComponent>
      {CARD_ITEMS?.map((card) => (
        <Card
          status={card.status}
          avatar={card.avatar}
          title="Shrimp and Chorizo Paella"
          content={
            <>
              <Typography variant="overline">Key capabilities</Typography>
              {card.content.items?.map((item) => <ContentItem {...item} />)}
            </>
          }
          actions={
            <Box display="flex" alignSelf="flex-end">
              <IconButton aria-label="watch">
                <WatchIcon />
              </IconButton>
              <IconButton aria-label="share">
                <DownloadIcon />
              </IconButton>
            </Box>
          }
        />
      ))}
    </CarouselComponent>
  ),
};
