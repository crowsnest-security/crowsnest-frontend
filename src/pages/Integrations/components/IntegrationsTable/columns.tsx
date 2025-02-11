import { Typography } from '@/components/Typography';
import { Box } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

import { ActionsCell } from './ActionsCell';
import { CapabilitiesCell } from './CapabilityCell';

const TableCellWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      height="100%"
    >
      {children}
    </Box>
  );
};

export const COLUMNS: GridColDef[] = [
  { field: 'name', headerName: 'Integration name', flex: 1 },

  {
    field: 'capability',
    headerName: 'Capability',
    flex: 1,
    renderCell: CapabilitiesCell,
  },
  { field: 'url', headerName: 'URL endpoint', flex: 1 },

  {
    field: 'user',
    headerName: 'Username',
    flex: 1,
    renderCell: ({ value }) => {
      return (
        <TableCellWrapper>
          <Typography variant="body2">{value || '-'}</Typography>
        </TableCellWrapper>
      );
    },
  },

  {
    field: 'password',
    headerName: 'Password',
    flex: 1,
    renderCell: () => {
      return (
        <TableCellWrapper>
          <Typography variant="body2">******</Typography>
        </TableCellWrapper>
      );
    },
  },

  {
    field: 'hash',
    headerName: 'Integration hash',
    flex: 1,
    renderCell: () => {
      return (
        <TableCellWrapper>
          <Typography variant="body2">XXXXX</Typography>
        </TableCellWrapper>
      );
    },
  },
  {
    field: 'action',
    headerName: 'Action',
    renderCell: ActionsCell,
    flex: 1,
  },
];
