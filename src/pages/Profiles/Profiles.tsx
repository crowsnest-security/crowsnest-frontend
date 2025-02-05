import { useProfilesListQuery } from '@/queries/profile';
import { Box, CircularProgress } from '@mui/material';

import { useStyles } from './Profiles.styles';
import { AddNewButton } from './components/AddNewButton';
import { ProfilesTable } from './components/ProfilesTable';

export const ProfilesPage = () => {
  const styles = useStyles();

  const { isLoading } = useProfilesListQuery();
  return (
    <Box css={styles.wrapper}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Box css={styles.top}>
            <AddNewButton />
          </Box>
          <ProfilesTable />
        </>
      )}
    </Box>
  );
};
