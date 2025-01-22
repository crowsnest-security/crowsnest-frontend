import SearchIcon from '@/assets/search-filled.svg?react';
import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { InputAdornment } from '@mui/material';

import { useStyles } from './TextField.styles';

export const TextFieldWithSearch: React.FC<
  React.PropsWithChildren<TextFieldProps>
> = (props) => {
  const styles = useStyles();

  return (
    <MuiTextField
      placeholder="Search"
      css={styles.searchInput}
      size="small"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        },
      }}
      {...props}
    />
  );
};
