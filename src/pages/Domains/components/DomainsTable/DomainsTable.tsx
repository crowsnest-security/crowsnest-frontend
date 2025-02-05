import DeleteFilledIcon from '@/assets/delete_filled_icon.svg?react';
import { Table } from '@/components/Table';
import { DOMAINS_QUERY_KEY } from '@/constants/queryKeys';
import { useToggle } from '@/hooks/useToggle';
import { useDomainDeleteMutation, useDomainsListQuery } from '@/queries/domain';
import { IconButton, useTheme } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useQueryClient } from '@tanstack/react-query';

import { DeleteDomainModal } from '../DeleteDomainModal';

const DeleteCell = (params: GridRenderCellParams) => {
  const queryClient = useQueryClient();
  const { palette } = useTheme();
  const { isOpen, toggle } = useToggle();
  const domainId = params.row.id;

  const { mutate: deleteDomain } = useDomainDeleteMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [DOMAINS_QUERY_KEY] });
    },
  });

  return (
    <>
      <IconButton onClick={toggle}>
        <DeleteFilledIcon css={{ fill: palette.action.active }} />
      </IconButton>
      <DeleteDomainModal
        isOpen={isOpen}
        onClose={toggle}
        onSubmit={() => {
          deleteDomain(domainId);
        }}
      />
    </>
  );
};

const COLUMNS: GridColDef[] = [
  { field: 'description', headerName: 'Domain', flex: 1 },
  {
    field: 'action',
    headerName: 'Action',
    renderCell: DeleteCell,
    flex: 1,
  },
];

export const DomainsTable = () => {
  const { data } = useDomainsListQuery();

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
