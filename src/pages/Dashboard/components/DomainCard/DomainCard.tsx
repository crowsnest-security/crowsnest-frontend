import CancelIcon from '@/assets/cancel-filled-icon.svg?react';
import CheckIcon from '@/assets/check-circle-filled-icon.svg?react';
import DownloadIcon from '@/assets/download_icon.svg?react';
import WatchIcon from '@/assets/visibility_icon.svg?react';
import { Card } from '@/components/Card';
import { Typography } from '@/components/Typography';
import { useCapabilityListByDomainQuery } from '@/queries/capabilities';
import { useFlagsListQuery } from '@/queries/flag';
import { Box, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useStyles } from './DomainCard.styles';

type DomainCardProps = {
  domainId: number;
};

type ContentItemProps = {
  checked: boolean;
  title: string;
};

const ContentItem: React.FC<ContentItemProps> = ({ checked, title }) => {
  const styles = useStyles();
  return (
    <Box css={styles.contentItem}>
      {checked ? <CheckIcon /> : <CancelIcon />}
      <Typography variant="caption" sx={{ textTransform: 'uppercase' }}>
        {title}
      </Typography>
    </Box>
  );
};

export const DomainCard: React.FC<DomainCardProps> = ({ domainId }) => {
  const { t } = useTranslation();
  const { data: capabilities } = useCapabilityListByDomainQuery({ domainId });
  const { data: flags } = useFlagsListQuery();
  const redFlagId = flags?.find((flag) => flag.description === 'red')?.id;

  const domain = capabilities?.[0]?.domain;
  const domainStatus = !capabilities?.find(
    (capability) => capability.flag === redFlagId,
  );

  return (
    <Card
      key={domain?.description}
      status={domainStatus}
      //   avatar={card.avatar}
      title={domain?.description}
      content={
        <>
          <Typography variant="overline">
            {t('dashboard.keyCapabilities')}
          </Typography>
          {capabilities?.map((capability) => (
            <ContentItem
              key={capability.description}
              checked={capability.flag !== redFlagId}
              title={capability.description}
            />
          ))}
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
  );
};
