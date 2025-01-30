import { Box } from '@mui/material';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import { AutoSizer } from 'react-virtualized';

import { useStyles } from './Table.styles';

const paginationModel = { page: 0, pageSize: 5 };

export const Table: React.FC<DataGridProps> = (props) => {
  const styles = useStyles();

  return (
    <Box sx={{ display: 'flex', flex: '1 1 auto' }}>
      <AutoSizer>
        {({ height, width }) => (
          <DataGrid
            sx={{
              height,
              width,
            }}
            initialState={{ pagination: { paginationModel } }}
            css={styles.root}
            {...props}
          />
        )}
      </AutoSizer>
    </Box>
  );
};
