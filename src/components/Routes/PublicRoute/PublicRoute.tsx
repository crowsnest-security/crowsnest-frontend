import { UserRole } from '@/constants/auth';
import { Routes } from '@/constants/routes';
import { useAuthStore } from '@/stores/auth';
import { Navigate } from 'react-router';

type PublicRouteProps = {
  children: React.ReactNode;
};

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { userRole } = useAuthStore();

  if (userRole !== UserRole.GUEST) {
    return <Navigate to={Routes.INDEX} replace />;
  }

  return children;
};
