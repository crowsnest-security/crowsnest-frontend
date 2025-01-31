import { AlertProps, Alert as MuiAlert } from '@mui/material';

export const Alert: React.FC<AlertProps> = ({ severity, ...props }) => {
  return <MuiAlert severity={severity} {...props} />;
};
