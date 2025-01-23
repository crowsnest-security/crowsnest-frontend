import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { ControlledTextField } from '@/fields/ControlledTextField';
import { Box, Checkbox, Divider, FormControlLabel, Link } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { useStyles } from './Login.styles';

const FormContext = () => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h5">{t('login.form.title')}</Typography>
      <Divider />
      <ControlledTextField name="email" label={t('login.form.email')} />
      <ControlledTextField
        name="password"
        label={t('login.form.password')}
        type="password"
      />

      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label={t('login.form.acceptTerms')}
      />

      <Button variant="contained">{t('login.form.signIn')}</Button>
      <Link href="#">{t('login.form.forgotPassword')}</Link>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        style={{ width: '100%', height: 10 }}
      >
        <Divider component="span" style={{ width: '46%' }} />
        <Typography variant="body2">or</Typography>
        <Divider style={{ width: '46%' }} component="span" />
      </Box>

      <Button variant="contained" disabled>
        {t('login.form.signInWithSSO')}
      </Button>
    </>
  );
};

export interface EventFiltersForm {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const styles = useStyles();
  const formMethods = useForm<EventFiltersForm>({
    mode: 'all',
  });

  const onSubmit = formMethods.handleSubmit((data) => {
    // TODO: login integration with API
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
