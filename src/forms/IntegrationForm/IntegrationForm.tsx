import { Button } from '@/components/Button';
import { DATE_FORMAT } from '@/constants/date';
import { INTEGRATIONS_QUERY_KEY } from '@/constants/queryKeys';
import { ControlledSelect } from '@/fields/ControlledSelect';
import { ControlledTextField } from '@/fields/ControlledTextField';
import {
  useIntegrationCreateMutation,
  useIntegrationUpdateMutation,
} from '@/queries/integration';
import { Integration } from '@/types/integration';
import { generateIntegrationHash } from '@/utils/inteagration';
import { linkValidation, requiredValidation } from '@/utils/validators';
import { Box } from '@mui/material';
import { useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { FormProvider, useForm, useFormState } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useStyles } from './IntegrationForm.styles';
import { useCapabilityItems } from './hooks';

type AddIntegrationFormProps = {
  onClose: () => void;
  onSubmit: () => void;
  integration?: Integration;
};

export interface AddCapabilityNameValues {
  integrationName: string;
  capabilityId: number;
  username: string;
  password: string;
  urlEndpoint: string;
  integrationHash: string;
  token: string;
  successCriteria: string;
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
  const capabilityItems = useCapabilityItems();

  return (
    <>
      <ControlledTextField
        name="integrationName"
        label={t('integrations.integrationName')}
        placeholder={t('integrations.integrationName')}
        rules={{ validate: requiredValidation }}
        css={styles.item}
      />

      <ControlledSelect
        options={capabilityItems}
        name="capabilityId"
        label={t('integrations.selectCapability')}
        rules={{ validate: requiredValidation }}
        css={styles.item}
      />

      <Box css={styles.row}>
        <ControlledTextField
          name="username"
          label={t('integrations.username')}
          placeholder={t('integrations.username')}
          css={styles.flexRowItem}
        />
        <ControlledTextField
          name="password"
          label={t('integrations.password')}
          placeholder={t('integrations.password')}
          type="password"
          css={styles.flexRowItem}
        />

        <ControlledTextField
          name="urlEndpoint"
          label={t('integrations.urlEndpoint')}
          placeholder={t('integrations.urlEndpoint')}
          rules={{ validate: linkValidation }}
          css={styles.flexRowItem}
        />
      </Box>

      <ControlledTextField
        name="integrationHash"
        label={t('integrations.integrationHash')}
        placeholder={t('integrations.integrationHashDescription')}
        rules={{ validate: requiredValidation }}
        css={styles.item}
        disabled
      />

      <ControlledTextField
        name="token"
        label={t('integrations.token')}
        placeholder={t('integrations.value')}
        multiline
      />

      <Box css={styles.lastItemWrapper}>
        <ControlledTextField
          name="successCriteria"
          label={t('integrations.successCriteria')}
          placeholder={t('integrations.successCriteria')}
          rules={{ validate: requiredValidation }}
          helperText={t('integrations.successCriteriaDescription')}
          multiline
        />

        <Box css={[styles.buttons]}>
          <Button
            variant="contained"
            css={styles.errorButton}
            onClick={onClose}
          >
            {t('integrations.cancel')}
          </Button>
          <Button variant="contained" type="submit" disabled={!isValid}>
            {t(
              isEdit
                ? 'integrations.editIntegration'
                : 'integrations.addIntegration',
            )}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export const IntegrationForm: React.FC<AddIntegrationFormProps> = ({
  onClose,
  onSubmit,
  integration,
}) => {
  const styles = useStyles();

  const isEdit = !!integration;

  const capabilityItems = useCapabilityItems();
  const formMethods = useForm<AddCapabilityNameValues>({
    mode: 'all',
    defaultValues: {
      integrationName: integration?.name || '',
      capabilityId: integration?.capability || capabilityItems?.[0].value,
      username: integration?.user || '',
      password: integration?.password || '',
      urlEndpoint: integration?.url || '',
      integrationHash: integration?.hash || generateIntegrationHash(),
      token: integration?.token || '',
      successCriteria: integration?.successCriteria || '',
    },
  });
  const queryClient = useQueryClient();

  const { mutate: createIntegrationMutation } = useIntegrationCreateMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [INTEGRATIONS_QUERY_KEY],
      });
    },
  });

  const { mutate: updateIntegrationMutation } = useIntegrationUpdateMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [INTEGRATIONS_QUERY_KEY],
      });
    },
  });

  const handleSubmit = formMethods.handleSubmit((data) => {
    if (!data.capabilityId) {
      return;
    }

    const params = {
      capability: data.capabilityId,
      url: data.urlEndpoint,
      user: data.username,
      password: data.password,
      token: data.token,
      successCriteria: data.successCriteria,
      lastUpdate: format(new Date(), DATE_FORMAT),
      name: data.integrationName,
      hash: data.integrationHash,
    };

    if (isEdit) {
      updateIntegrationMutation({ id: integration.id, ...params });
    } else {
      createIntegrationMutation(params);
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
