import { Box, Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';

import { useStyles } from './ChipGroup.styles';

type ChipGroupProps = {
  chips: Array<{ label: string; value: number }>;
  activeChips?: Array<number>;
  setActiveChip: (id: number) => void;
};

type ChipProps = MuiChipProps & {
  isActive?: boolean;
};

export const Chip: React.FC<ChipProps> = ({ onClick, isActive, ...other }) => {
  const styles = useStyles();

  return (
    <MuiChip
      css={[styles.root, isActive && styles.activeChip]}
      variant="outlined"
      onClick={onClick}
      {...other}
    />
  );
};

export const ChipGroup: React.FC<ChipGroupProps> = ({
  chips,
  activeChips,
  //single change of chip
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
          key={chip.value}
          onClick={() => setActiveChip(chip.value)}
          label={chip.label}
          isActive={activeChips?.includes(chip?.value)}
        />
      ))}
    </Box>
  );
};
