import { ROUTE_NAMES } from '@/constants/routeNames';
import { useLocation } from 'react-router';

export const useRouteName = () => {
  const { pathname } = useLocation();

  return ROUTE_NAMES[pathname];
};
