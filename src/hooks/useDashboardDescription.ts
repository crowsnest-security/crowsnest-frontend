import { Routes } from '@/constants/routes';
import { i18n } from '@/i18n';
import { useLocation } from 'react-router';

const DASHBOARD_DESCRIPTIONS = {
  [Routes.INDEX]: i18n.t('dashboard.descriptions.index'),
};

export const useDashboardDescription = () => {
  const { pathname } = useLocation();

  return DASHBOARD_DESCRIPTIONS[pathname];
};
