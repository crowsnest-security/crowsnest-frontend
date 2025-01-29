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
    <Box display="flex" flexDirection="row" gap={1}>
      {chips?.map((chip) => (
        <Chip
          css={activeChip === chip?.id && styles.activeChip}
          variant="outlined"
          key={chip.id}
          label={chip.label}
          onClick={() => setActiveChip(chip.id)}
        />
      ))}
    </Box>
  );
};
