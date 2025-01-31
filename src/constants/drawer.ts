import ApplicationsMenuItemIcon from '@/assets/applications_menu_item_icon.svg?react';
import DashboardMenuItemIcon from '@/assets/dashboard_menu_item.svg?react';
import ProfilesMenuItemIcon from '@/assets/profiles_menu_item_icon.svg?react';
import { i18n } from '@/i18n';
import { IMenuItem } from '@/types/menuItem';

import { Routes } from './routes';

export const MENU_LIST: IMenuItem[] = [
  {
    route: Routes.INDEX,
    label: i18n.t('routes.dashboard'),
    Icon: DashboardMenuItemIcon,
  },
  {
    route: Routes.APPLICATIONS,
    label: i18n.t('routes.applications'),
    Icon: ApplicationsMenuItemIcon,
  },
  {
    route: Routes.PROFILES,
    label: i18n.t('routes.profiles'),
    Icon: ProfilesMenuItemIcon,
  },
];
