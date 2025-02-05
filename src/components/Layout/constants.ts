import { Routes } from '@/constants/routes';
import { i18n } from '@/i18n';

export const DASHBOARD_TAB_VALUE = 0;
export const DOMAINS_TAB_VALUE = 1;
export const CAPABILITIES_TAB_VALUE = 2;
export const INTEGRATIONS_TAB_VALUE = 3;
export const PROFILES_TAB_VALUE = 4;

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
  {
    label: i18n.t('routes.capabilities'),
    value: CAPABILITIES_TAB_VALUE,
    route: Routes.CAPABILITIES,
  },
  {
    label: i18n.t('routes.integrations'),
    value: INTEGRATIONS_TAB_VALUE,
    route: Routes.INTEGRATIONS,
  },
  {
    label: i18n.t('routes.profiles'),
    value: PROFILES_TAB_VALUE,
    route: Routes.PROFILES,
  },
];
