import { Box, Chip } from '@mui/material';

import { useStyles } from './ChipGroup.styles';

type ChipGroupProps = {
  chips: Array<{ label: string; value: number }>;
  activeChips?: Array<number>;
  setActiveChip: (id: number) => void;
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
      {chips?.map((chip) => (
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
      ))}
    </Box>
  );
};
