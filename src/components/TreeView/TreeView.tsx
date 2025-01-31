import DeleteFIlledIcon from '@/assets/delete_filled_icon.svg?react';
import { CAPABILITIES_WITH_DOMAIN_QUERY_KEY } from '@/constants/queryKeys';
import { useCapabilityDeleteMutation } from '@/queries/capabilities';
import { Box, useTheme } from '@mui/material';
import { RichTreeView } from '@mui/x-tree-view/RichTreeView';
import {
  TreeItem2Checkbox,
  TreeItem2Content,
  TreeItem2GroupTransition,
  TreeItem2IconContainer,
  TreeItem2Label,
  TreeItem2Root,
} from '@mui/x-tree-view/TreeItem2';
import { TreeItem2DragAndDropOverlay } from '@mui/x-tree-view/TreeItem2DragAndDropOverlay';
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';
import { TreeViewBaseItem } from '@mui/x-tree-view/models';
import {
  UseTreeItem2Parameters,
  useTreeItem2,
} from '@mui/x-tree-view/useTreeItem2';
import { useQueryClient } from '@tanstack/react-query';
import { forwardRef } from 'react';
import { AutoSizer } from 'react-virtualized';

import { useStyles } from './TreeView.styles';

type TreeViewProps = {
  items: TreeViewBaseItem[];
};

const DeleteIcon = (props) => {
  const queryClient = useQueryClient();

  const { palette } = useTheme();

  const { mutate: deleteCapabilityMutate } = useCapabilityDeleteMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [CAPABILITIES_WITH_DOMAIN_QUERY_KEY],
      });
    },
  });

  return (
    <DeleteFIlledIcon
      {...props}
      css={{ fill: `${palette.text.primary} !important` }}
      onClick={() => {
        props.id && deleteCapabilityMutate(props.id);
      }}
    />
  );
};

interface CustomTreeItemProps
  extends Omit<UseTreeItem2Parameters, 'rootRef'>,
    Omit<React.HTMLAttributes<HTMLLIElement>, 'onFocus'> {}

const CustomTreeItem = forwardRef(function CustomTreeItem(
  props: CustomTreeItemProps,
  ref: React.Ref<HTMLLIElement>,
) {
  const { id, itemId, label, disabled, children, ...other } = props;

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getCheckboxProps,
    getLabelProps,
    getGroupTransitionProps,
    getDragAndDropOverlayProps,
    status,
  } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

  return (
    <TreeItem2Provider itemId={itemId}>
      <TreeItem2Root {...getRootProps(other)}>
        <TreeItem2Content {...getContentProps()}>
          <TreeItem2IconContainer {...getIconContainerProps()}>
            <TreeItem2Icon status={status} />
          </TreeItem2IconContainer>
          <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
            {!children && <DeleteIcon id={itemId} />}

            <TreeItem2Checkbox {...getCheckboxProps()} />
            <TreeItem2Label {...getLabelProps()} />
          </Box>
          <TreeItem2DragAndDropOverlay {...getDragAndDropOverlayProps()} />
        </TreeItem2Content>
        {children && (
          <TreeItem2GroupTransition {...getGroupTransitionProps()} />
        )}
      </TreeItem2Root>
    </TreeItem2Provider>
  );
});

export const TreeView: React.FC<TreeViewProps> = ({ items }) => {
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
              slots={{ item: CustomTreeItem }}
            />
          );
        }}
      </AutoSizer>
    </Box>
  );
};
