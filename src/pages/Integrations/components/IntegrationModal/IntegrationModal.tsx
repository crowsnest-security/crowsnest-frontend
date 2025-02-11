import { ModalsContainer } from '@/components/Modal/Container';
import { ModalsContent } from '@/components/Modal/Content';
import { Typography } from '@/components/Typography';
import { IntegrationForm } from '@/forms/IntegrationForm';
import { Integration } from '@/types/integration';
import { ClassNames } from '@emotion/react';
import { Box } from '@mui/material';
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
    <ClassNames>
      {({ css }) => (
        <ModalsContainer
          open={isOpen}
          title={
            <Box css={styles.header}>
              <Typography variant="subtitle2">
                {integration
                  ? t('integrations.editIntegration')
                  : t('integrations.addIntegration')}
              </Typography>
            </Box>
          }
          css={styles.modalsContent}
          classes={{
            paper: css(styles.paper),
          }}
        >
          <ModalsContent>
            <IntegrationForm
              onClose={onClose}
              onSubmit={onSubmit}
              integration={integration}
            />
          </ModalsContent>
        </ModalsContainer>
      )}
    </ClassNames>
  );
};
