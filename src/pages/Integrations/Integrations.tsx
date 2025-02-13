import { useCapabilityListQuery } from '@/queries/capabilities';
import { Box, CircularProgress } from '@mui/material';

import { useStyles } from './Integrations.styles';
import { AddNewButton } from './components/AddNewButton';
import { CapabilityFilters } from './components/CapabilityFilters';
import { IntegrationsTable } from './components/IntegrationsTable';

export const IntegrationsPage = () => {
  const styles = useStyles();

  const { isLoading } = useCapabilityListQuery();
  return (
    <Box css={styles.wrapper}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Box css={styles.top}>
            <CapabilityFilters />
            <AddNewButton />
          </Box>
          <IntegrationsTable />
        </>
      )}
    </Box>
  );
};
