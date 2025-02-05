import { useDomainsListQuery } from '@/queries/domain';
import { useCallback, useMemo } from 'react';

export const useDomainItems = () => {
  const { data } = useDomainsListQuery();

  return useMemo(
    () =>
      data?.map((domain) => ({
        label: domain.description,
        value: domain.id,
      })) || [],
    [data],
  );
};

export const useGetDomainById = () => {
  const { data } = useDomainsListQuery();

  return useCallback(
    (domainId: number) => data?.find((domain) => domain.id === domainId),
    [data],
  );
};
