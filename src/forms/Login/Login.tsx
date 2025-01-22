import { Button } from '@/components/Button';
import { Typography } from '@/components/Typography';
import { ControlledTextField } from '@/fields/ControlledTextField';
import { Box, Checkbox, Divider, FormControlLabel, Link } from '@mui/material';
import { FormProvider, useForm, useFormState } from 'react-hook-form';

import { useStyles } from './Login.styles';

const FormContext = () => {
  const formState = useFormState();

  return (
    <>
      <Typography variant="h5">Governance Engine Login</Typography>
      <Divider />
      <ControlledTextField name="email" label="Email address" />
      <ControlledTextField name="password" label="Password" type="password" />

      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="I accept the Terms and Conditions"
      />

      <Button variant="contained">Sign in</Button>
      <Link href="#">Forgot Password?</Link>

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
        Sign in WITH SSO
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
