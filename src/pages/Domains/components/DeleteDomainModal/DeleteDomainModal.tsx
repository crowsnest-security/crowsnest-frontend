import { Button } from '@/components/Button';
import { ModalsActions } from '@/components/Modal/Actions';
import { ModalsContainer } from '@/components/Modal/Container';
import { ModalsContent } from '@/components/Modal/Content';
import { Typography } from '@/components/Typography';

import { useStyles } from './DeleteDomainModal.styles';

type DeleteDomainModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

export const DeleteDomainModal: React.FC<DeleteDomainModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const styles = useStyles();

  return (
    <ModalsContainer open={isOpen} title="Delete Domain?">
      <ModalsContent css={styles.modalsContent}>
        <Typography variant="body1">
          This action will remove the selected domain and any associated
          capabilities.
        </Typography>
        <Typography variant="body1">
          Monitoring will no longer be performed.
        </Typography>
        <Typography variant="body1">Are you sure?</Typography>
      </ModalsContent>
      <ModalsActions>
        <Button sx={{ color: 'text.secondary' }} onClick={onClose}>
          Cancel
        </Button>
        <Button onClick={onSubmit}>Delete</Button>
      </ModalsActions>
    </ModalsContainer>
  );
};
