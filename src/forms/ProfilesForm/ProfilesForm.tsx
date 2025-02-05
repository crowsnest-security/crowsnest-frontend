import { Button } from '@/components/Button';
import { ChipGroup } from '@/components/ChipGroup';
import { Typography } from '@/components/Typography';
import { PROFILES_QUERY_KEY } from '@/constants/queryKeys';
import { ControlledTextField } from '@/fields/ControlledTextField';
import { useDomainItems } from '@/hooks/domains';
import {
  useProfileCreateMutation,
  useProfileUpdateMutation,
} from '@/queries/profile';
import { Profile } from '@/types/profile';
import { requiredValidation } from '@/utils/validators';
import { Box } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import {
  FormProvider,
  useForm,
  useFormContext,
  useFormState,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useStyles } from './ProfilesForm.styles';

type AddProfilesFormProps = {
  onClose: () => void;
  onSubmit: () => void;
  profile?: Profile;
};

export interface AddProfileValues {
  name: string;
  description: string;
  domains: number[];
}

const FormContext = ({
  onClose,
  isEdit,
}: {
  onClose: () => void;
  isEdit: boolean;
}) => {
  const { t } = useTranslation();
  const styles = useStyles();

  const { isValid } = useFormState();
  const domainItems = useDomainItems();
  const { watch, setValue } = useFormContext<AddProfileValues>();

  const domains = watch('domains');

  const setDomain = (domainId) => {
    const newDomains = domains.includes(domainId)
      ? domains.filter((domain) => domain !== domainId)
      : [...domains, domainId];

    setValue('domains', newDomains);
  };

  const hasAtLeastOneDomain = domains.length > 0;

  return (
    <>
      <ControlledTextField
        name="name"
        label={t('profiles.profileName')}
        placeholder={t('profiles.profileName')}
        rules={{ validate: requiredValidation }}
        css={styles.item}
      />
      <ControlledTextField
        name="description"
        label={t('profiles.profileDescription')}
        placeholder={t('profiles.profileDescriptionPlaceholder')}
        rules={{ validate: requiredValidation }}
        multiline
      />

      <Box css={[styles.item, styles.domainsWrapper]}>
        <Typography variant="body1">{t('profiles.selectDomains')}</Typography>
        <ChipGroup
          chips={domainItems}
          activeChips={domains}
          setActiveChip={setDomain}
        />
      </Box>

      <Box css={styles.lastItemWrapper}>
        <Box css={[styles.buttons]}>
          <Button
            variant="contained"
            css={styles.errorButton}
            onClick={onClose}
          >
            {t('profiles.cancel')}
          </Button>
          <Button
            variant="contained"
            type="submit"
            disabled={!isValid || !hasAtLeastOneDomain}
          >
            {t(isEdit ? 'profiles.editProfile' : 'profiles.addProfile')}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export const ProfilesForm: React.FC<AddProfilesFormProps> = ({
  onClose,
  onSubmit,
  profile,
}) => {
  const styles = useStyles();

  const isEdit = !!profile;
  console.log('isEdit', isEdit);

  const formMethods = useForm<AddProfileValues>({
    mode: 'all',
    defaultValues: {
      domains: profile?.domains || [],
      name: profile?.name || '',
      description: profile?.description || '',
    },
  });
  const queryClient = useQueryClient();

  const { mutate: createProfileMutation } = useProfileCreateMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [PROFILES_QUERY_KEY],
      });
    },
  });

  const { mutate: updateProfileMutation } = useProfileUpdateMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [PROFILES_QUERY_KEY],
      });
    },
  });

  const handleSubmit = formMethods.handleSubmit((data) => {
    const params = {
      name: data.name,
      description: data.description,
      domains: data.domains,
    };

    if (isEdit) {
      updateProfileMutation({ id: profile.id, ...params });
    } else {
      createProfileMutation(params);
    }

    onSubmit();
  });

  return (
    <div css={styles.wrapper}>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit} css={styles.form}>
          <FormContext onClose={onClose} isEdit={isEdit} />
        </form>
      </FormProvider>
    </div>
  );
};
