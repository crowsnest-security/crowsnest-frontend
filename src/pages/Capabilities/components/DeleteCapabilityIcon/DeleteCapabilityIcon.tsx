import DeleteFIlledIcon from '@/assets/delete_filled_icon.svg?react';
import { SubmissionModal } from '@/components/SubmissionModal/SubmissionModal';
import { CAPABILITIES_WITH_DOMAIN_QUERY_KEY } from '@/constants/queryKeys';
import { useToggle } from '@/hooks/useToggle';
import { useCapabilityDeleteMutation } from '@/queries/capabilities';
import { useTheme } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

export const DeleteIcon = (props) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
  const { isOpen, toggle } = useToggle();

  const { palette } = useTheme();

  const { mutate: deleteCapabilityMutate } = useCapabilityDeleteMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CAPABILITIES_WITH_DOMAIN_QUERY_KEY],
      });
    },
  });

  const handleSubmit = () => {
    props.id && deleteCapabilityMutate(props.id);
  };

  return (
    <>
      <DeleteFIlledIcon
        {...props}
        css={{ fill: `${palette.text.primary} !important` }}
        onClick={toggle}
      />
      <SubmissionModal
        isOpen={isOpen}
        onClose={toggle}
        onSubmit={handleSubmit}
        title={t('capabilities.delete')}
        content={[
          t('capabilities.deleteContent.text1'),
          t('capabilities.deleteContent.text2'),
          t('capabilities.deleteContent.text3'),
        ]}
      />
    </>
  );
};
