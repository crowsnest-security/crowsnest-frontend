import { Table } from '@/components/Table';
import { useIntegrationsListQuery } from '@/queries/integration';
import { useIntegrationsStore } from '@/stores/integrations';
import { useMemo } from 'react';

import { COLUMNS } from './columns';

export const IntegrationsTable = () => {
  const { data: integrations } = useIntegrationsListQuery();

  const { activeCapabilities } = useIntegrationsStore();

  const data = useMemo(() => {
    if (!activeCapabilities || activeCapabilities?.length === 0) {
      return integrations;
    }

    return integrations?.filter((integration) =>
      activeCapabilities?.includes(integration.capability),
    );
  }, [activeCapabilities, integrations]);

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
