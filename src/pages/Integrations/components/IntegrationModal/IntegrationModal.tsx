import { ModalsContainer } from '@/components/Modal/Container';
import { ModalsContent } from '@/components/Modal/Content';
import { IntegrationForm } from '@/forms/IntegrationForm';
import { Integration } from '@/types/integration';
import { useTranslation } from 'react-i18next';

import { useStyles } from './IntegrationModal.styles';

type IntegrationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  integration?: Integration;
};

export const IntegrationModal: React.FC<IntegrationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  integration,
}) => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <ModalsContainer
      open={isOpen}
      title={
        integration
          ? t('integrations.editIntegration')
          : t('integrations.addIntegration')
      }
      css={styles.modalsContent}
    >
      <ModalsContent>
        <IntegrationForm
          onClose={onClose}
          onSubmit={onSubmit}
          integration={integration}
        />
      </ModalsContent>
    </ModalsContainer>
  );
};
