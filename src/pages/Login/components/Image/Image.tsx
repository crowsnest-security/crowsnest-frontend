import CrowSystems from '@/assets/crow_systems.svg?react';
import { Typography } from '@/components/Typography';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useStyles } from './Image.styles';

export const Image = () => {
  const styles = useStyles();
  const { t } = useTranslation();

  return (
    <Box css={styles.wrapper}>
      <CrowSystems css={styles.logo} />
      <Typography variant="h4" css={styles.whiteText}>
        {t('login.imageDescription.firstRow')}
      </Typography>
      <Typography variant="h4" css={styles.greenText}>
        {t('login.imageDescription.secondRow')}
      </Typography>
    </Box>
  );
};
