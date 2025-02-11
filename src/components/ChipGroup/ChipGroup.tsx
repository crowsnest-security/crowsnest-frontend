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

export const Chip: React.FC<ChipProps> = ({
  onClick,
  label,
  isActive,
  ...other
}) => {
  const styles = useStyles();

  return (
    <MuiChip
      css={[styles.root, isActive && styles.activeChip]}
      variant="outlined"
      label={label}
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
  const styles = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={1}
      flexWrap="wrap"
      alignItems="stretch"
    >
      {chips?.map((chip) => {
        return (
          <Chip
            key={chip.value}
            css={[
              styles.root,
              activeChips?.includes(chip?.value) && styles.activeChip,
            ]}
            variant="outlined"
            label={chip.label}
            onClick={() => setActiveChip(chip.value)}
          />
        );
      })}
    </Box>
  );
};
