import { Typography } from '@/components/Typography';
import { useCapabilityListQuery } from '@/queries/capabilities';
import { useIntegrationsListQuery } from '@/queries/integration';
import { useIntegrationsStore } from '@/stores/integrations';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from './CapabilityFilters.styles';

export const CapabilityFilters = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const { data: integrations } = useIntegrationsListQuery();
  const { data: capabilities } = useCapabilityListQuery();
  const { activeCapability, setActiveCapability } = useIntegrationsStore();

  const capabilityItems = useMemo(() => {
    const capabilitiesIds = Array.from(
      new Set(
        integrations?.map((integration) => integration.capability),
      ).values() || [],
    );

    const getCapabilityNameById = (capabilityId) =>
      capabilities?.find((capability) => capability.id === capabilityId)
        ?.description || '';

    const resultItems = capabilitiesIds?.map((capabilityId) => ({
      id: capabilityId.toString(),
      label: getCapabilityNameById(capabilityId),
    }));

    resultItems.unshift({ id: '', label: 'All' });

    return resultItems;
  }, [integrations, capabilities]);

  return (
    <Box css={styles.wrapper}>
      <Typography variant="body1" css={styles.filtersLabel}>
        {t('integrations.filterBy')}
      </Typography>
      {capabilityItems?.length > 0 && (
        <FormControl fullWidth>
          <InputLabel id="capability-filter">Capability</InputLabel>
          <Select
            labelId="capability-filter-select-label"
            id="capability-filter-select"
            value={activeCapability}
            label="Capability"
            onChange={(event) => {
              setActiveCapability(event?.target?.value || '');
            }}
            css={styles.filterSelect}
          >
            {capabilityItems?.map((capability) => (
              <MenuItem key={capability.id} value={capability.id}>
                {capability.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </Box>
  );
};
