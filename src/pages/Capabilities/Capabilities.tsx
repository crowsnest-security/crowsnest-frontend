import { Typography } from '@/components/Typography';
import { AddCapabilityForm } from '@/forms/AddCapability';
import { useCapabilityListWithDomainQuery } from '@/queries/capabilities';
import { useDomainsListQuery } from '@/queries/domain';
import { Box, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useStyles } from './Capabilities.styles';
import { CapabilitiesTreeView } from './components/CapabilitiesTreeView';

export const CapabilitiesPage = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { isLoading: isCapabilitiesLoading } =
    useCapabilityListWithDomainQuery();
  const { isLoading: isDomainsLoading } = useDomainsListQuery();

  const isLoading = isCapabilitiesLoading || isDomainsLoading;
  return (
    <Box css={styles.wrapper}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box css={styles.content}>
          <Box css={styles.leftSide}>
            <Box css={styles.texts}>
              <Typography variant="body1" css={styles.description}>
                {t('capabilities.description')}
              </Typography>
              <Typography variant="caption" css={styles.note}>
                {t('capabilities.note')}
              </Typography>
            </Box>

            <CapabilitiesTreeView />
          </Box>
          <Box css={styles.rightSide}>
            <AddCapabilityForm />
          </Box>
        </Box>
      )}
    </Box>
  );
};
