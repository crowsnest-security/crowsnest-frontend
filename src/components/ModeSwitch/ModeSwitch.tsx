import { Switch } from '@/components/Switch';
import { useCommonDataStore } from '@/stores/common';
import { Box } from '@mui/material';

import { Typography } from '../Typography';
import { useStyles } from './ModeSwitch.styles';

export const ModeSwitch = () => {
  const styles = useStyles();
  const { mode, toggleMode } = useCommonDataStore();

  return (
    <Box sx={{ alignSelf: 'flex-end' }}>
      <Typography variant="body1" component="span">
        Developer Mode
      </Typography>
      <Switch
        checked={mode === 'admin'}
        css={styles.switch}
        onChange={toggleMode}
      />
      <Typography variant="body1" component="span">
        Admin Mode
      </Typography>
    </Box>
  );
};
