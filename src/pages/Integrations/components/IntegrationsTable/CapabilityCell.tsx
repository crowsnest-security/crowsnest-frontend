import { Typography } from '@/components/Typography';
import { useCapabilityListQuery } from '@/queries/capabilities';
import { Box } from '@mui/material';
import { useMemo } from 'react';

export const CapabilitiesCell = ({ row }) => {
  const { data: capabilities } = useCapabilityListQuery();

  const capabilityName =
    useMemo(() => {
      return capabilities?.find(
        (capability) => capability.id === row.capability,
      );
    }, [capabilities, row.capability])?.description || '';

  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      height="100%"
    >
      <Typography variant="body2">{capabilityName}</Typography>
    </Box>
  );
};
