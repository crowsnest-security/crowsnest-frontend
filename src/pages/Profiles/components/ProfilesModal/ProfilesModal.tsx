import { ModalsContainer } from '@/components/Modal/Container';
import { ModalsContent } from '@/components/Modal/Content';
import { ProfilesForm } from '@/forms/ProfilesForm';
import { Profile } from '@/types/profile';
import { useTranslation } from 'react-i18next';

import { useStyles } from './ProfilesModal.styles';

type ProfileModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  profile?: Profile;
};

export const ProfilesModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  profile,
}) => {
  const { t } = useTranslation();
  const styles = useStyles();

  return (
    <ModalsContainer
      open={isOpen}
      title={profile ? t('profiles.editProfile') : t('profiles.addProfile')}
      css={styles.modalsContent}
    >
      <ModalsContent>
        <ProfilesForm onClose={onClose} onSubmit={onSubmit} profile={profile} />
      </ModalsContent>
    </ModalsContainer>
  );
};
