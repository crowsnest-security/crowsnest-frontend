import {
  PROFILES_BY_ID_ENDPOINT,
  PROFILES_ENDPOINT,
} from '@/constants/endpoints';
import {
  PROFILES_BY_ID_QUERY_KEY,
  PROFILES_QUERY_KEY,
} from '@/constants/queryKeys';
import { Profile } from '@/types/profile';
import { axios } from '@/utils/axios';
import { useQuery } from '@tanstack/react-query';

const fetchProfilesList = (): Promise<Profile[]> =>
  axios.get(PROFILES_ENDPOINT).then((response) => response.data);

export const useProfilesListQuery = () =>
  useQuery({
    queryKey: [PROFILES_QUERY_KEY],
    queryFn: fetchProfilesList,
    staleTime: 600_000, // 10mins
  });

const fetchProfile = (id?: number): Promise<Profile> =>
  axios
    .get(PROFILES_BY_ID_ENDPOINT.replace('{id}', id?.toString() || ''))
    .then((response) => response.data);

export const useProfileQuery = ({ id }: { id?: number }) =>
  useQuery({
    queryKey: [PROFILES_BY_ID_QUERY_KEY, { id }],
    queryFn: () => fetchProfile(id),
    enabled: !!id,
    staleTime: 600_000, // 10mins
  });
