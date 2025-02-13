import { Box, Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

import { useStyles } from './ChipGroup.styles';

type ChipGroupProps = {
  chips: Array<{ label: string; id: number }>;
  activeChip?: number;
  setActiveChip: (id?: number) => void;
};

type ChipProps = MuiChipProps & {
  isActive?: boolean;
};

export const Chip: React.FC<ChipProps> = ({ onClick, label, isActive }) => {
  const styles = useStyles();
  return (
    <MuiChip
      css={[styles.root, isActive && styles.activeChip]}
      variant="outlined"
      label={label}
      onClick={onClick}
    />
  );
};

export const ChipGroup: React.FC<ChipGroupProps> = ({
  chips,
  activeChip,
  setActiveChip,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={1}
      flexWrap="wrap"
      alignItems="stretch"
    >
      {chips?.map((chip) => (
        <Chip
          onClick={() => setActiveChip(chip.id)}
          label={chip.label}
          isActive={activeChip === chip?.id}
        />
      ))}
    </Box>
  );
};
