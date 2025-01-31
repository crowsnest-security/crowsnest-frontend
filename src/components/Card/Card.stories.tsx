import AvatarImage from '@/assets/avatar.png';
import CancelIcon from '@/assets/cancel-filled-icon.svg?react';
import CheckIcon from '@/assets/check-circle-filled-icon.svg?react';
import DownloadIcon from '@/assets/download_icon.svg?react';
import WatchIcon from '@/assets/visibility_icon.svg?react';
import { Box, IconButton } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../Typography';
import { Card as CardComponent } from './Card';

const meta: Meta<typeof CardComponent> = {
  component: CardComponent,
};

export default meta;
type Story = StoryObj<typeof CardComponent>;

type ContentItemProps = {
  checked: boolean;
  title: string;
};

const CONTENT_ITEMS = [
  { checked: true, title: 'Capability name 1' },
  { checked: false, title: 'Capability name 2' },
  { checked: true, title: 'Capability name 3' },
];

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

export const Card: Story = {
  render: () => (
    <CardComponent
      status={false}
      avatar={AvatarImage}
      title="Shrimp and Chorizo Paella"
      content={
        <>
          <Typography variant="overline">Key capabilities</Typography>
          {CONTENT_ITEMS?.map((item) => <ContentItem {...item} />)}
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
  ),
};
