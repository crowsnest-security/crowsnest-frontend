import { ChipProps, Chip as MuiChip } from '@mui/material';

export const Chip: React.FC<ChipProps> = (props) => {
  return <MuiChip {...props} />;
};
