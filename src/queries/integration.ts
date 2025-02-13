import {
  INTEGRATIONS_BY_CAPABILITY_ENDPOINT,
  INTEGRATIONS_BY_ID_ENDPOINT,
  INTEGRATIONS_ENDPOINT,
} from '@/constants/endpoints';
import {
  INTEGRATIONS_BY_CAPABILITY_QUERY_KEY,
  INTEGRATIONS_QUERY_KEY,
} from '@/constants/queryKeys';
import { Integration } from '@/types/integration';
import { axios } from '@/utils/axios';
import { useMutation, useQuery } from '@tanstack/react-query';

const fetchIntegrationsList = (): Promise<Integration[]> =>
  axios.get(INTEGRATIONS_ENDPOINT).then((response) => response.data);

export const useIntegrationsListQuery = () =>
  useQuery({
    queryKey: [INTEGRATIONS_QUERY_KEY],
    queryFn: fetchIntegrationsList,
    staleTime: 600_000, //10 mins
  });

const fetchIntegrationsByCapability = (
  capabilityId: string,
): Promise<Integration[]> =>
  axios
    .get(
      INTEGRATIONS_BY_CAPABILITY_ENDPOINT.replace(
        '{capabilityId}',
        capabilityId.toString(),
      ),
    )
    .then((response) => response.data);

export const useIntegrationsByCapabilityQuery = (capabilityId) =>
  useQuery({
    queryKey: [INTEGRATIONS_BY_CAPABILITY_QUERY_KEY, {}],
    queryFn: () => fetchIntegrationsByCapability(capabilityId),
    staleTime: 600_000, //10 mins
    enabled: !!capabilityId,
  });

const createIntegration = (integrationData: Omit<Integration, 'id'>) => {
  return axios({
    url: INTEGRATIONS_ENDPOINT,
    method: 'POST',
    data: {
      ...integrationData,
    },
  });
};

export const useIntegrationCreateMutation = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  return useMutation({ mutationFn: createIntegration, onSuccess });
};

const updateIntegration = ({ id, ...integrationData }: Integration) => {
  return axios({
    url: INTEGRATIONS_BY_ID_ENDPOINT.replace('{id}', id.toString()),
    method: 'PUT',
    data: {
      ...integrationData,
    },
  });
};

export const useIntegrationUpdateMutation = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  return useMutation({ mutationFn: updateIntegration, onSuccess });
};

const deleteIntegration = (id: Pick<Integration, 'id'>) => {
  return axios({
    url: INTEGRATIONS_BY_ID_ENDPOINT.replace('{id}', id.toString()),
    method: 'DELETE',
  });
};

export const useIntegrationDeleteMutation = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  return useMutation({ mutationFn: deleteIntegration, onSuccess });
};
