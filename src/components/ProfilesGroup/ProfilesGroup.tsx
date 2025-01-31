import { ChipGroup } from '@/components/ChipGroup';
import { useProfilesListQuery } from '@/queries/profile';
import { useCommonDataStore } from '@/stores/common';
import { Box } from '@mui/material';
import { useEffect } from 'react';

import { Typography } from '../Typography';
import { useStyles } from './ProfilesGroup.styles';

export const ProfilesGroup = () => {
  const styles = useStyles();
  const { data } = useProfilesListQuery();
  const { activeProfileId, setActiveProfileId } = useCommonDataStore();

  useEffect(() => {
    if (data) {
      setActiveProfileId(data?.[0]?.id || undefined);
    }
  }, [data, setActiveProfileId]);

  const profileItems = data?.map((profile) => ({
    label: profile.name,
    id: profile.id,
  }));

  return (
    <Box css={styles.wrapper}>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Profile:
      </Typography>
      {profileItems && (
        <ChipGroup
          chips={profileItems}
          activeChip={activeProfileId}
          setActiveChip={setActiveProfileId}
        />
      )}
    </Box>
  );
};
