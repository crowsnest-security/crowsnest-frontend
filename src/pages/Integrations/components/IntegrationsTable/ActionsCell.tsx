import DeleteFilledIcon from '@/assets/delete_filled_icon.svg?react';
import EditFillIcon from '@/assets/edit-fill-icon.svg?react';
import { INTEGRATIONS_QUERY_KEY } from '@/constants/queryKeys';
import { useToggle } from '@/hooks/useToggle';
import { useIntegrationDeleteMutation } from '@/queries/integration';
import { Integration } from '@/types/integration';
import { IconButton, useTheme } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';

import { IntegrationModal } from '../IntegrationModal';

export const ActionsCell = ({ row }) => {
  const { palette } = useTheme();
  const { isOpen, toggle } = useToggle();
  const queryClient = useQueryClient();
  const { mutate: deleteIntegration } = useIntegrationDeleteMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [INTEGRATIONS_QUERY_KEY],
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
          deleteIntegration(row.id);
        }}
      >
        <DeleteFilledIcon css={{ fill: palette.action.active }} />
      </IconButton>

      <IntegrationModal
        isOpen={isOpen}
        onClose={toggle}
        onSubmit={toggle}
        integration={row as Integration}
      />
    </>
  );
};
