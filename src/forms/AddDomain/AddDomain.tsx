import { Button } from '@/components/Button';
import { DATE_FORMAT } from '@/constants/date';
import { DOMAINS_QUERY_KEY } from '@/constants/queryKeys';
import { ControlledTextField } from '@/fields/ControlledTextField';
import { useDomainCreateMutation } from '@/queries/domain';
import { requiredValidation } from '@/utils/validators';
import { useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { FormProvider, useForm, useFormState } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useStyles } from './AddDomain.styles';

export interface AddDomainValues {
  domainName: string;
}

const FormContext = () => {
  const { t } = useTranslation();
  const styles = useStyles();

  const { isValid } = useFormState();

  return (
    <>
      <ControlledTextField
        name="domainName"
        label={t('domains.domainName')}
        placeholder={t('domains.placeholder')}
        rules={{ validate: requiredValidation }}
      />

      <Button
        variant="contained"
        type="submit"
        css={styles.submitButton}
        disabled={!isValid}
      >
        {t('domains.addDomain')}
      </Button>
    </>
  );
};

export const AddDomainForm = () => {
  const styles = useStyles();
  const formMethods = useForm<AddDomainValues>({
    mode: 'all',
    defaultValues: {
      domainName: '',
    },
  });
  const queryClient = useQueryClient();

  const { mutate: createDomainMutation } = useDomainCreateMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DOMAINS_QUERY_KEY] });
    },
  });

  const onSubmit = formMethods.handleSubmit((data) => {
    createDomainMutation({
      createdTimestamp: format(new Date(), DATE_FORMAT),
      description: data.domainName,
    });

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
