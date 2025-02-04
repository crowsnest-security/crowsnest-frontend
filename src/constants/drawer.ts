import ApplicationsMenuItemIcon from '@/assets/applications_menu_item_icon.svg?react';
import DashboardMenuItemIcon from '@/assets/dashboard_menu_item.svg?react';
import ProfilesMenuItemIcon from '@/assets/profiles_menu_item_icon.svg?react';
import { IMenuItem } from '@/types/menuItem';

import { Routes } from './routes';

export const MENU_LIST: IMenuItem[] = [
  {
    route: Routes.INDEX,
    label: 'Dashboard',
    Icon: DashboardMenuItemIcon,
  },
  {
    route: Routes.APPLICATIONS,
    label: 'Applications',
    Icon: ApplicationsMenuItemIcon,
  },
  {
    route: Routes.PROFILES,
    label: 'Profiles',
    Icon: ProfilesMenuItemIcon,
  },
];
