import { Box, Typography } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';

import { ActionsCell } from './ActionsCell';

export const COLUMNS: GridColDef[] = [
  { field: 'name', headerName: 'Profile', flex: 1 },

  {
    field: 'domainsCount',
    headerName: 'Domains count',
    flex: 1,
    renderCell: ({ row }) => {
      return (
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          height="100%"
        >
          <Typography variant="body2">{row?.domains?.length || 0}</Typography>
        </Box>
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
