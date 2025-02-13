import { Button } from '@/components/Button';
import { ModalsActions } from '@/components/Modal/Actions';
import { ModalsContainer } from '@/components/Modal/Container';
import { ModalsContent } from '@/components/Modal/Content';
import { Typography } from '@/components/Typography';
import { i18n } from '@/i18n';

import { useStyles } from './SubmissionModal.styles';

type SubmissionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title: string;
  content: string | Array<string>;
  submitText?: string;
  cancelText?: string;
};

export const SubmissionModal: React.FC<SubmissionModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  content,
  submitText = i18n.t('submissionModal.delete'),
  cancelText = i18n.t('submissionModal.cancel'),
  title,
}) => {
  const styles = useStyles();

  return (
    <ModalsContainer open={isOpen} title={title}>
      <ModalsContent css={styles.modalsContent}>
        {Array.isArray(content) ? (
          content?.map((item, index) => (
            <Typography key={index} variant="body1">
              {item}
            </Typography>
          ))
        ) : (
          <Typography variant="body1">{content}</Typography>
        )}
      </ModalsContent>
      <ModalsActions>
        <Button sx={{ color: 'text.secondary' }} onClick={onClose}>
          {cancelText}
        </Button>
        <Button onClick={onSubmit}>{submitText}</Button>
      </ModalsActions>
    </ModalsContainer>
  );
};
