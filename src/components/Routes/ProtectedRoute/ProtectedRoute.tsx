import { UserRole } from '@/constants/auth';
import { Routes } from '@/constants/routes';
import { useAuthStore } from '@/stores/auth';
import { Navigate } from 'react-router';

type ProtectedRouteProps = {
  children: React.ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { userRole } = useAuthStore();

  if (userRole === UserRole.GUEST) {
    return <Navigate to={Routes.LOGIN} replace />;
  }

  return children;
};
