import { Button } from '@/components/Button';
import { useToggle } from '@/hooks/useToggle';
import { useTranslation } from 'react-i18next';

import { ProfilesModal } from '../ProfilesModal';

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
        {t('profiles.addNew')}
      </Button>
      <ProfilesModal isOpen={isOpen} onClose={toggle} onSubmit={handleSubmit} />
    </>
  );
};
