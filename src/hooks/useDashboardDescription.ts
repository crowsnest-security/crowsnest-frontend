import { Routes } from '@/constants/routes';
import { i18n } from '@/i18n';
import { useLocation } from 'react-router';

const DASHBOARD_DESCRIPTIONS = {
  [Routes.INDEX]: i18n.t('dashboard.descriptions.index'),
  [Routes.DOMAINS]: i18n.t('dashboard.descriptions.domains'),
  [Routes.CAPABILITIES]: i18n.t('dashboard.descriptions.capabilities'),
  [Routes.INTEGRATIONS]: i18n.t('dashboard.descriptions.integrations'),
  [Routes.PROFILES]: i18n.t('dashboard.descriptions.profiles'),
};

export const useDashboardDescription = () => {
  const { pathname } = useLocation();

  return DASHBOARD_DESCRIPTIONS[pathname];
};
