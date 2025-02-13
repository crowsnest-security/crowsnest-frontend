import DeleteFilledIcon from '@/assets/delete_filled_icon.svg?react';
import EditFillIcon from '@/assets/edit-fill-icon.svg?react';
import { PROFILES_QUERY_KEY } from '@/constants/queryKeys';
import { useToggle } from '@/hooks/useToggle';
import { useProfileDeleteMutation } from '@/queries/profile';
import { Profile } from '@/types/profile';
import { IconButton, useTheme } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';

import { ProfilesModal } from '../ProfilesModal';

export const ActionsCell = ({ row }) => {
  const { palette } = useTheme();
  const { isOpen, toggle } = useToggle();
  const queryClient = useQueryClient();

  const { mutate: deleteProfile } = useProfileDeleteMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [PROFILES_QUERY_KEY],
      });
    },
  });

  return (
    <>
      <IconButton onClick={toggle}>
        <EditFillIcon css={{ fill: palette.action.active }} />
      </IconButton>
      <IconButton
        onClick={() => {
          deleteProfile(row.id);
        }}
      >
        <DeleteFilledIcon css={{ fill: palette.action.active }} />
      </IconButton>

      <ProfilesModal
        isOpen={isOpen}
        onClose={toggle}
        onSubmit={toggle}
        profile={row as Profile}
      />
    </>
  );
};
