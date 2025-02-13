import { Button } from '@/components/Button';
import { useToggle } from '@/hooks/useToggle';
import { useTranslation } from 'react-i18next';

import { IntegrationModal } from '../IntegrationModal';

export const AddNewButton = () => {
  const { t } = useTranslation();
  const { isOpen, toggle } = useToggle();

  const handleSubmit = () => {
    toggle();
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ alignSelf: 'center', minWidth: 220 }}
        onClick={toggle}
      >
        {t('integrations.addNew')}
      </Button>
      <IntegrationModal
        isOpen={isOpen}
        onClose={toggle}
        onSubmit={handleSubmit}
      />
    </>
  );
};
