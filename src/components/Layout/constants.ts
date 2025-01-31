import { Routes } from '@/constants/routes';
import { i18n } from '@/i18n';

export const DASHBOARD_TAB_VALUE = 0;
export const DOMAINS_TAB_VALUE = 1;

export const TABS = [
  {
    label: i18n.t('routes.dashboard'),
    value: DASHBOARD_TAB_VALUE,
    route: Routes.INDEX,
  },
  {
    label: i18n.t('routes.domains'),
    value: DOMAINS_TAB_VALUE,
    route: Routes.DOMAINS,
  },
];
