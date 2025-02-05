import { Box, Chip } from '@mui/material';

import { useStyles } from './ChipGroup.styles';

type ChipGroupProps = {
  chips: Array<{ label: string; id: number }>;
  activeChip?: number;
  setActiveChip: (id?: number) => void;
};

export const ChipGroup: React.FC<ChipGroupProps> = ({
  chips,
  activeChip,
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
      {chips?.map((chip) => (
        <Chip
          key={chip.id}
          css={[styles.root, activeChip === chip?.id && styles.activeChip]}
          variant="outlined"
          label={chip.label}
          onClick={() => setActiveChip(chip.id)}
        />
      ))}
    </Box>
  );
};
