import DeleteFilledIcon from '@/assets/delete_filled_icon.svg?react';
import EditFillIcon from '@/assets/edit-fill-icon.svg?react';
import { SubmissionModal } from '@/components/SubmissionModal/SubmissionModal';
import { INTEGRATIONS_QUERY_KEY } from '@/constants/queryKeys';
import { useToggle } from '@/hooks/useToggle';
import { useIntegrationDeleteMutation } from '@/queries/integration';
import { Integration } from '@/types/integration';
import { IconButton, useTheme } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { IntegrationModal } from '../IntegrationModal';

export const ActionsCell = ({ row }) => {
  const { palette } = useTheme();
  const { t } = useTranslation();
  const { isOpen: isEditOpen, toggle: toggleEdit } = useToggle();
  const { isOpen: isDeleteOpen, toggle: toggleDelete } = useToggle();
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
      <IconButton onClick={toggleEdit}>
        <EditFillIcon css={{ fill: palette.action.active }} />
      </IconButton>
      <IconButton onClick={toggleDelete}>
        <DeleteFilledIcon css={{ fill: palette.action.active }} />
      </IconButton>

      <IntegrationModal
        isOpen={isEditOpen}
        onClose={toggleEdit}
        onSubmit={toggleEdit}
        integration={row as Integration}
      />
      <SubmissionModal
        isOpen={isDeleteOpen}
        onSubmit={() => {
          deleteIntegration(row.id);
        }}
        onClose={toggleDelete}
        title={t('integrations.delete')}
        content={[
          t('integrations.deleteContent.text1'),
          t('integrations.deleteContent.text2'),
          t('integrations.deleteContent.text3'),
        ]}
      />
    </>
  );
};
