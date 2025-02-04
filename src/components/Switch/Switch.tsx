import { Switch as MuiSwitch, SwitchProps } from '@mui/material';

export const Switch: React.FC<SwitchProps> = (props) => {
  return <MuiSwitch {...props} />;
};
