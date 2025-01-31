import SearchIcon from '@/assets/search-filled.svg?react';
import { InputBase } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useStyles } from './SearchInput.styles';

export const SearchInput = () => {
  const styles = useStyles();
  const { t } = useTranslation();
  return (
    <div css={styles.search}>
      <div css={styles.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        css={styles.inputBase}
        placeholder={t('header.search')}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
};
