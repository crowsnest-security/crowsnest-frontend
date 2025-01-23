import { TextField as MuiTextField, TextFieldProps } from '@mui/material';

export const TextField: React.FC<React.PropsWithChildren<TextFieldProps>> = (
  props,
) => {
  return <MuiTextField {...props} />;
};
