import { Carousel } from '@/components/Carousel';
import { useFlagsListQuery } from '@/queries/flag';
import { useProfileQuery } from '@/queries/profile';
import { useCommonDataStore } from '@/stores/common';
import { Box, CircularProgress } from '@mui/material';

import { useStyles } from './Dashboard.styles';
import { DomainCard } from './components/DomainCard/DomainCard';

export const DashboardPage = () => {
  const styles = useStyles();
  const { activeProfileId } = useCommonDataStore();
  const { isLoading: isFlagsLoading } = useFlagsListQuery();

  const { data, isLoading: iaProfileLoading } = useProfileQuery({
    id: activeProfileId,
  });
  const { domains } = data || {};

  const hasDomains = (domains?.length || 0) > 0;

  const isLoading = isFlagsLoading || iaProfileLoading;

  return (
    <Box css={styles.wrapper}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        hasDomains && (
          // reset carousel state on change profile
          <Carousel key={activeProfileId}>
            {domains?.map((domainId) => (
              <DomainCard key={domainId} domainId={domainId} />
            ))}
          </Carousel>
        )
      )}
    </Box>
  );
};
