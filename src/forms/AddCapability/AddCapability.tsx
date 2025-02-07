import { Button } from '@/components/Button';
import { DATE_FORMAT } from '@/constants/date';
import { CAPABILITIES_WITH_DOMAIN_QUERY_KEY } from '@/constants/queryKeys';
import { ControlledSelect } from '@/fields/ControlledSelect';
import { ControlledTextField } from '@/fields/ControlledTextField';
import { useCapabilityCreateMutation } from '@/queries/capabilities';
import { requiredValidation } from '@/utils/validators';
import { useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { FormProvider, useForm, useFormState } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useStyles } from './AddCapability.styles';
import { useDomainItems, useGetDomainById } from './hooks';

export interface AddCapabilityNameValues {
  capabilityName: string;
  domainId: number;
}

const FormContext = () => {
  const { t } = useTranslation();
  const styles = useStyles();

  const { isValid } = useFormState();
  const domainItems = useDomainItems();

  return (
    <>
      <ControlledTextField
        name="capabilityName"
        label={t('capabilities.capabilityName')}
        placeholder={t('capabilities.placeholder')}
        rules={{ validate: requiredValidation }}
      />

      <ControlledSelect
        options={domainItems}
        name="domainId"
        label={t('capabilities.selectDomain')}
        rules={{ validate: requiredValidation }}
      />

      <Button
        variant="contained"
        type="submit"
        css={styles.submitButton}
        disabled={!isValid}
      >
        {t('capabilities.addCapability')}
      </Button>
    </>
  );
};

export const AddCapabilityForm = () => {
  const styles = useStyles();
  const domainItems = useDomainItems();
  const getDomainById = useGetDomainById();
  const formMethods = useForm<AddCapabilityNameValues>({
    mode: 'all',
    defaultValues: {
      capabilityName: '',
      domainId: domainItems?.[0].value,
    },
  });
  const queryClient = useQueryClient();

  const { mutate: createCapabilityMutation } = useCapabilityCreateMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CAPABILITIES_WITH_DOMAIN_QUERY_KEY],
      });
    },
  });

  const onSubmit = formMethods.handleSubmit((data) => {
    if (!data.domainId) {
      return;
    }
    const domain = getDomainById(data.domainId);
    if (domain) {
      createCapabilityMutation({
        description: data.capabilityName,

        createdTimestamp: format(new Date(), DATE_FORMAT),
        domain,
        flag: 1,
      });
    }

    formMethods.reset();
  });

  return (
    <div css={styles.wrapper}>
      <FormProvider {...formMethods}>
        <form onSubmit={onSubmit} css={styles.form}>
          <FormContext />
        </form>
      </FormProvider>
    </div>
  );
};
