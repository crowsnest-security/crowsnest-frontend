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
import { useMutation, useQuery } from '@tanstack/react-query';

const fetchProfilesList = (): Promise<Profile[]> =>
  axios.get(PROFILES_ENDPOINT).then((response) => response.data);

export const useProfilesListQuery = () =>
  useQuery({
    queryKey: [PROFILES_QUERY_KEY],
    queryFn: fetchProfilesList,
    select: (data) => data?.sort((a, b) => a.name.localeCompare(b.name)),
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

const createProfile = (profileData: Omit<Profile, 'id'>) => {
  return axios({
    url: PROFILES_ENDPOINT,
    method: 'POST',
    data: {
      ...profileData,
    },
  });
};

export const useProfileCreateMutation = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  return useMutation({ mutationFn: createProfile, onSuccess });
};

const updateProfile = ({ id, ...profileData }: Profile) => {
  return axios({
    url: PROFILES_BY_ID_ENDPOINT.replace('{id}', id.toString()),
    method: 'PUT',
    data: {
      ...profileData,
    },
  });
};

export const useProfileUpdateMutation = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  return useMutation({ mutationFn: updateProfile, onSuccess });
};

const deleteProfile = (id: Pick<Profile, 'id'>) => {
  return axios({
    url: PROFILES_BY_ID_ENDPOINT.replace('{id}', id.toString()),
    method: 'DELETE',
  });
};

export const useProfileDeleteMutation = ({
  onSuccess,
}: {
  onSuccess: () => void;
}) => {
  return useMutation({ mutationFn: deleteProfile, onSuccess });
};
