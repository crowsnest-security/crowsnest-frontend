import { useIntegrationsListQuery } from '@/queries/integration';
import { useCallback } from 'react';

export const useGetIntegrationByCapabilityId = () => {
  const { data: integrations } = useIntegrationsListQuery();

  const getIntegrationByCapabilityId = useCallback(
    (capabilityId) => {
      const integration = integrations?.find(
        (integration) =>
          integration.capability.toString() === capabilityId.toString(),
      );

      return integration;
    },
    [integrations],
  );

  return getIntegrationByCapabilityId;
};
