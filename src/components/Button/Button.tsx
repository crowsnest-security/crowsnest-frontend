import { ButtonProps, Button as MuiButton } from '@mui/material';

export const Button: React.FC<ButtonProps> = (props) => {
  return <MuiButton {...props} />;
};
