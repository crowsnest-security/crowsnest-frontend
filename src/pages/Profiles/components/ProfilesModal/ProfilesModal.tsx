import { ModalsContainer } from '@/components/Modal/Container';
import { ModalsContent } from '@/components/Modal/Content';
import { Typography } from '@/components/Typography';
import { ProfilesForm } from '@/forms/ProfilesForm';
import { Profile } from '@/types/profile';
import { ClassNames } from '@emotion/react';
import { Box } from '@mui/material';
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
    <ClassNames>
      {({ css }) => (
        <ModalsContainer
          open={isOpen}
          title={
            <Box css={styles.header}>
              <Typography variant="subtitle2">
                {profile ? t('profiles.editProfile') : t('profiles.addProfile')}
              </Typography>
            </Box>
          }
          css={styles.modalsContent}
          classes={{
            paper: css(styles.paper),
          }}
        >
          <ModalsContent>
            <ProfilesForm
              onClose={onClose}
              onSubmit={onSubmit}
              profile={profile}
            />
          </ModalsContent>
        </ModalsContainer>
      )}
    </ClassNames>
  );
};
