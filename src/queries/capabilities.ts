import {
  CAPABILITIES_BY_DOMAIN_ENDPOINT,
  CAPABILITIES_ENDPOINT,
  CAPABILITIES_WITH_DOMAIN_ENDPOINT,
} from '@/constants/endpoints';
import {
  CAPABILITIES_BY_DOMAIN_QUERY_KEY,
  CAPABILITIES_QUERY_KEY,
  CAPABILITIES_WITH_DOMAIN_QUERY_KEY,
} from '@/constants/queryKeys';
import { Capability, CapabilityWithDomain } from '@/types/capability';
import { axios } from '@/utils/axios';
import { useMutation, useQuery } from '@tanstack/react-query';

const fetchCapabilitiesList = (): Promise<Capability[]> =>
  axios.get(CAPABILITIES_ENDPOINT).then((response) => response.data);

export const useCapabilityListQuery = () =>
  useQuery({
    queryKey: [CAPABILITIES_QUERY_KEY],
    queryFn: fetchCapabilitiesList,
    staleTime: 600_000, //10 mins
  });

const fetchCapabilitiesListByDomain = (
  domainId: number,
): Promise<Capability[]> =>
  axios
    .get(
      CAPABILITIES_BY_DOMAIN_ENDPOINT.replace(
        '{domainId}',
        domainId.toString(),
      ),
    )
    .then((response) => response.data);

export const useCapabilityListByDomainQuery = ({
  domainId,
}: {
  domainId: number;
}) => {
  return useQuery({
    queryKey: [CAPABILITIES_BY_DOMAIN_QUERY_KEY, { domainId }],
    queryFn: () => fetchCapabilitiesListByDomain(domainId),
    enabled: !!domainId,
    staleTime: 600_000, //10 mins
  });
};

const fetchCapabilitiesListWithDomain = (): Promise<CapabilityWithDomain[]> =>
  axios
    .get(CAPABILITIES_WITH_DOMAIN_ENDPOINT)
    .then((response) => response.data);

export const useCapabilityListWithDomainQuery = () => {
  return useQuery({
    queryKey: [CAPABILITIES_WITH_DOMAIN_QUERY_KEY],
    queryFn: fetchCapabilitiesListWithDomain,

    staleTime: 600_000, //10 mins
  });
};

const createCapability = (capabilityData: Omit<Capability, 'id'>) => {
  return axios({
    url: CAPABILITIES_ENDPOINT,
    method: 'POST',
    data: {
      ...capabilityData,
    },
  });
};

export const useCapabilityCreateMutation = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  return useMutation({ mutationFn: createCapability, onSuccess });
};

export const useCapabilityListSizeByDomainQuery = () => {};

export const useCapabilityListSizeByDomainAndFlagQuery = () => {};

export const useCapabilityListByDomainDescriptionQuery = () => {};

export const useCapabilityByIdEndpoint = () => {};

const deleteCapability = (capabilityId: string) => {
  return axios({
    url: `${CAPABILITIES_ENDPOINT}/${capabilityId}`,
    method: 'DELETE',
  });
};

export const useCapabilityDeleteMutation = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  return useMutation({ mutationFn: deleteCapability, onSuccess });
};
