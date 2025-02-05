import { ChipGroup } from '@/components/ChipGroup';
import { Typography } from '@/components/Typography';
import { useCapabilityListQuery } from '@/queries/capabilities';
import { useIntegrationsListQuery } from '@/queries/integration';
import { useIntegrationsStore } from '@/stores/integrations';
import { Box } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useStyles } from './CapabilityFilters.styles';

export const CapabilityFilters = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const { data: integrations } = useIntegrationsListQuery();
  const { data: capabilities } = useCapabilityListQuery();
  const { activeCapabilities, setActiveCapability } = useIntegrationsStore();

  const capabilityItems = useMemo(() => {
    const capabilitiesIds = Array.from(
      new Set(
        integrations?.map((integration) => integration.capability),
      ).values() || [],
    );

    const getCapabilityNameById = (capabilityId) =>
      capabilities?.find((capability) => capability.id === capabilityId)
        ?.description || '';

    return capabilitiesIds?.map((capabilityId) => ({
      value: capabilityId,
      label: getCapabilityNameById(capabilityId),
    }));
  }, [integrations, capabilities]);

  return (
    <Box css={styles.wrapper}>
      <Typography variant="body1" css={styles.filtersLabel}>
        {t('integrations.filterBy')}
      </Typography>
      {capabilityItems?.length > 0 && (
        <ChipGroup
          chips={capabilityItems}
          activeChips={activeCapabilities}
          setActiveChip={setActiveCapability}
        />
      )}
    </Box>
  );
};
