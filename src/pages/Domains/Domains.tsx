import { Alert } from '@/components/Alert';
import { AddDomainForm } from '@/forms/AddDomain';
import { useDomainsListQuery } from '@/queries/domain';
import { Box, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useStyles } from './Domains.styles';
import { DomainsTable } from './components/DomainsTable';

export const DomainsPage = () => {
  const { isLoading } = useDomainsListQuery();
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <Box css={styles.wrapper}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Box css={styles.content}>
          <Box css={styles.leftSide}>
            <Alert severity="warning" variant="outlined" css={styles.alert}>
              {t('domains.alert')}
            </Alert>

            <DomainsTable />
          </Box>

          <Box css={styles.rightSide}>
            <AddDomainForm />
          </Box>
        </Box>
      )}
    </Box>
  );
};
