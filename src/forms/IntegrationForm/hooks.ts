import { useCapabilityListQuery } from '@/queries/capabilities';
import { useMemo } from 'react';

export const useCapabilityItems = () => {
  const { data } = useCapabilityListQuery();

  return useMemo(
    () =>
      data?.map((domain) => ({
        label: domain.description,
        value: domain.id,
      })) || [],
    [data],
  );
};
