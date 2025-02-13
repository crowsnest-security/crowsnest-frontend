import { Table } from '@/components/Table';
import { useIntegrationsListQuery } from '@/queries/integration';
import { useIntegrationsStore } from '@/stores/integrations';
import { useMemo } from 'react';

import { COLUMNS } from './columns';

export const IntegrationsTable = () => {
  const { data: integrations } = useIntegrationsListQuery();

  const { activeCapability } = useIntegrationsStore();

  const data = useMemo(() => {
    if (!activeCapability) {
      return integrations;
    }

    return integrations?.filter(
      (integration) =>
        integration.capability.toString() === activeCapability.toString(),
    );
  }, [activeCapability, integrations]);

  return (
    <Table
      rows={data}
      columns={COLUMNS}
      disableRowSelectionOnClick
      disableAutosize
      disableColumnFilter
      disableColumnSorting
      disableColumnMenu
      disableColumnResize
      pageSizeOptions={[5, 10, 15, 25]}
    />
  );
};
