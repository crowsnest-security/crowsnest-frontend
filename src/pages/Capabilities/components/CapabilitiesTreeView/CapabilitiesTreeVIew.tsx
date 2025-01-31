import { TreeView } from '@/components/TreeView';
import { useCapabilityListWithDomainQuery } from '@/queries/capabilities';
import { useMemo } from 'react';

export const CapabilitiesTreeView = () => {
  const { data } = useCapabilityListWithDomainQuery();

  const treeItems = useMemo(() => {
    const groupedCapabilitiesByDomainDescription =
      data && Object.groupBy(data, ({ domainName }) => domainName);

    return (
      groupedCapabilitiesByDomainDescription &&
      Object.keys(groupedCapabilitiesByDomainDescription)?.map((groupKey) => ({
        id: groupKey,
        label: groupKey,
        children: groupedCapabilitiesByDomainDescription[groupKey]?.map(
          (capability) => ({
            id: `${capability.id}`,
            label: capability.name,
          }),
        ),
      }))
    );
  }, [data]);

  return <TreeView items={treeItems || []} />;
};
