import {
  CAPABILITIES_BY_DOMAIN_ENDPOINT,
  CAPABILITIES_ENDPOINT,
} from '@/constants/endpoints';
import {
  CAPABILITIES_BY_DOMAIN_QUERY_KEY,
  CAPABILITIES_QUERY_KEY,
} from '@/constants/queryKeys';
import { Capability } from '@/types/capability';
import { axios } from '@/utils/axios';
import { useQuery } from '@tanstack/react-query';

const fetchCapabilitiesList = (): Promise<Capability[]> =>
  axios.get(CAPABILITIES_ENDPOINT).then((response) => response.data);

export const useCapabilityListQuery = () =>
  useQuery({
    queryKey: [CAPABILITIES_QUERY_KEY],
    queryFn: fetchCapabilitiesList,
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

export const useCapabilityListWithDomainQuery = ({
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

export const useCapabilityListByDomainQuery = () => {};

export const useCapabilityListSizeByDomainQuery = () => {};

export const useCapabilityListSizeByDomainAndFlagQuery = () => {};

export const useCapabilityListByDomainDescriptionQuery = () => {};

export const useCapabilityByIdEndpoint = () => {};
