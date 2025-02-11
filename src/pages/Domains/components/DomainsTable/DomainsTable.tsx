import DeleteFilledIcon from '@/assets/delete_filled_icon.svg?react';
import { SubmissionModal } from '@/components/SubmissionModal/SubmissionModal';
import { Table } from '@/components/Table';
import { DOMAINS_QUERY_KEY } from '@/constants/queryKeys';
import { useToggle } from '@/hooks/useToggle';
import { useDomainDeleteMutation, useDomainsListQuery } from '@/queries/domain';
import { useDomainsStore } from '@/stores/domains';
import { IconButton, useTheme } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

const DeleteCell = (params: GridRenderCellParams) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation();
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
      <SubmissionModal
        isOpen={isOpen}
        onClose={toggle}
        onSubmit={() => {
          deleteDomain(domainId);
        }}
        title={t('domains.delete')}
        content={[
          t('domains.deleteContent.text1'),
          t('domains.deleteContent.text2'),
          t('domains.deleteContent.text3'),
        ]}
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
  const { searchText } = useDomainsStore();

  const filteredData = useMemo(
    () => data?.filter((row) => row.description.includes(searchText)),
    [data, searchText],
  );

  return (
    <Table
      rows={filteredData}
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
