import { AlertProps, Alert as MuiAlert } from '@mui/material';

export const Alert: React.FC<AlertProps> = (props) => {
  return <MuiAlert {...props} />;
};
