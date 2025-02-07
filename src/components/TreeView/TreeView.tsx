import { Box } from '@mui/material';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import { AutoSizer } from 'react-virtualized';

import { useStyles } from './TreeView.styles';

type TreeViewProps = {
  items: TreeViewBaseItem[];
  customTreeItem?: React.ComponentType<any>;
};

export const TreeView: React.FC<TreeViewProps> = ({
  items,
  customTreeItem,
}) => {
  const styles = useStyles();

  return (
    <Box sx={{ display: 'flex', flex: '1 1 auto' }}>
      <AutoSizer>
        {({ height, width }) => {
          return (
            <RichTreeView
              items={items}
              sx={{ height, width }}
              css={styles.root}
              slots={{ item: customTreeItem }}
            />
          );
        }}
      </AutoSizer>
    </Box>
  );
};
