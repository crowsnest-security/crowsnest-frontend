import { TextField } from '@/components/TextField';
import { useDomainsStore } from '@/stores/domains';
import { useTranslation } from 'react-i18next';

import { useStyles } from './DomainsSearch.styles';

export const DomainsSearch = () => {
  const { t } = useTranslation();
  const styles = useStyles();
  const { searchText, setSearchText } = useDomainsStore();

  return (
    <TextField
      label={t('domains.search')}
      css={styles.searchField}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};
