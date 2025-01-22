import CrowSystems from '@/assets/crow_systems.svg?react';
import { Typography } from '@/components/Typography';
import { Box } from '@mui/material';

import { useStyles } from './Image.styles';

export const Image = () => {
  const styles = useStyles();

  return (
    <Box css={styles.wrapper}>
      <CrowSystems css={styles.logo} />
      <Typography variant="h4" css={styles.whiteText}>
        A new horizon for
      </Typography>
      <Typography variant="h4" css={styles.greenText}>
        cyber assurance
      </Typography>
    </Box>
  );
};
