import { DOMAINS_ENDPOINT } from '@/constants/endpoints';
import { DOMAINS_QUERY_KEY } from '@/constants/queryKeys';
import { Domain } from '@/types/domain';
import { axios } from '@/utils/axios';
import { useMutation, useQuery } from '@tanstack/react-query';

const fetchDomains = (): Promise<Domain[]> =>
  axios.get(DOMAINS_ENDPOINT).then((response) => response.data);

export const useDomainsListQuery = () => {
  return useQuery({
    queryKey: [DOMAINS_QUERY_KEY],
    queryFn: fetchDomains,
    staleTime: 600_000, //10 mins
  });
};

const createMutation = (domainData: Omit<Domain, 'id'>) => {
  return axios({
    url: DOMAINS_ENDPOINT,
    method: 'POST',
    data: {
      ...domainData,
    },
  });
};

export const useDomainCreateMutation = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  return useMutation({ mutationFn: createMutation, onSuccess });
};

const deleteMutation = (domainId: string) => {
  return axios({
    url: `${DOMAINS_ENDPOINT}/${domainId}`,
    method: 'DELETE',
  });
};

export const useDomainDeleteMutation = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  return useMutation({ mutationFn: deleteMutation, onSuccess });
};
