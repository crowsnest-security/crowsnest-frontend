import { LoginForm } from '@/forms/Login';
import { Box } from '@mui/material';

import { useStyles } from './Login.styles';
import { Image } from './components/Image';

export const LoginPage = () => {
  const styles = useStyles();

  return (
    <Box css={styles.wrapper}>
      <Image />
      <LoginForm />
    </Box>
  );
};
