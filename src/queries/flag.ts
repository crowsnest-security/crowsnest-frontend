import { FLAGS_ENDPOINT } from '@/constants/endpoints';
import { FLAGS_QUERY_KEY } from '@/constants/queryKeys';
import { Flag } from '@/types/flag';
import { axios } from '@/utils/axios';
import { useQuery } from '@tanstack/react-query';

const fetchFlags = (): Promise<Flag[]> =>
  axios.get(FLAGS_ENDPOINT).then((response) => response.data);

export const useFlagsListQuery = () => {
  return useQuery({
    queryKey: [FLAGS_QUERY_KEY],
    queryFn: fetchFlags,
    staleTime: 600_000, //10 mins
  });
};
