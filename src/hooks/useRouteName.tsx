import { ROUTE_NAMES } from '@/contstants/routeNames';
import { useLocation } from 'react-router';

export const useRouteName = () => {
  const { pathname } = useLocation();

  return ROUTE_NAMES[pathname];
};
