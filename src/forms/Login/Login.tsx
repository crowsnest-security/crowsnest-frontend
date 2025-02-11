import { Button } from '@/components/Button';
import { Divider } from '@/components/Divider';
import { Typography } from '@/components/Typography';
import { UserRole } from '@/constants/auth';
import {
  ADMIN_USER_EMAIL,
  ADMIN_USER_PASSWORD,
  DEV_USER_EMAIL,
  DEV_USER_PASSWORD,
} from '@/constants/login';
import { Routes } from '@/constants/routes';
import { ControlledTextField } from '@/fields/ControlledTextField';
import { useAuthStore } from '@/stores/auth';
import { emailValidation, requiredValidation } from '@/utils/validators';
import { Checkbox, FormControlLabel, Link } from '@mui/material';
import { FormProvider, useForm, useFormState } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

import { useStyles } from './Login.styles';

export interface LoginFormValues {
  email: string;
  password: string;
}

//TODO: Temp solution for login process

const EMAIL_ROLE_MAP = {
  [DEV_USER_EMAIL]: UserRole.DEV,
  [ADMIN_USER_EMAIL]: UserRole.ADMIN,
};
const EMAIL_PASSWORD_MAP = {
  [DEV_USER_EMAIL]: DEV_USER_PASSWORD,
  [ADMIN_USER_EMAIL]: ADMIN_USER_PASSWORD,
};

const FormContext = () => {
  const { t } = useTranslation();
  const { isValid } = useFormState();

  return (
    <>
      <Typography variant="h5">{t('login.form.title')}</Typography>
      <Divider />
      <ControlledTextField
        name="email"
        label={t('login.form.email')}
        rules={{ validate: emailValidation }}
      />
      <ControlledTextField
        name="password"
        label={t('login.form.password')}
        type="password"
        rules={{ validate: requiredValidation }}
      />

      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label={t('login.form.acceptTerms')}
      />

      <Button variant="contained" disabled={!isValid} type="submit">
        {t('login.form.signIn')}
      </Button>
      <Link href="#">{t('login.form.forgotPassword')}</Link>

      {/*
        TODO: comment for now, uncomment after SSO integration
      <Divider>
        <Typography variant="body2">or</Typography>
      </Divider>

      <Button variant="contained" disabled>
        {t('login.form.signInWithSSO')}
      </Button> */}
    </>
  );
};

export const LoginForm = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  const { setUserRole } = useAuthStore();

  const navigate = useNavigate();

  const formMethods = useForm<LoginFormValues>({
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = formMethods.handleSubmit((data) => {
    // TODO: login integration with API

    // TODO: Temp solution for login process with mock data
    if (![DEV_USER_EMAIL, ADMIN_USER_EMAIL].includes(data.email)) {
      formMethods.setError('email', {
        type: 'invalid',
        message: t('validation.emailNotExist'),
      });
      return;
    }
    if (EMAIL_PASSWORD_MAP[data.email] !== data.password) {
      formMethods.setError('password', {
        type: 'invalid',
        message: t('validation.incorrectPassword'),
      });
      return;
    }

    setUserRole(EMAIL_ROLE_MAP[data.email]);
    navigate(Routes.INDEX);
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
