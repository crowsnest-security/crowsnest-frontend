import { Table } from '@/components/Table';
import { useProfilesListQuery } from '@/queries/profile';

import { COLUMNS } from './columns';

export const ProfilesTable = () => {
  const { data: profiles } = useProfilesListQuery();

  return (
    <Table
      rows={profiles}
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
