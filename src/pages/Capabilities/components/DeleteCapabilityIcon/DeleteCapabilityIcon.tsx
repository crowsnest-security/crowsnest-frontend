import DeleteFIlledIcon from '@/assets/delete_filled_icon.svg?react';
import { CAPABILITIES_WITH_DOMAIN_QUERY_KEY } from '@/constants/queryKeys';
import { useToggle } from '@/hooks/useToggle';
import { useCapabilityDeleteMutation } from '@/queries/capabilities';
import { useTheme } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';

import { DeleteCapabilityModal } from '../DeleteCapabilityModal';

export const DeleteIcon = (props) => {
  const queryClient = useQueryClient();
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
      <DeleteCapabilityModal
        isOpen={isOpen}
        onClose={toggle}
        onSubmit={handleSubmit}
      />
    </>
  );
};
