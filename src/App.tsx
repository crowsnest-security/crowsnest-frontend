import { AuthorizedLayout, UnauthorizedLayout } from '@/components/Layout';
import { Routes } from '@/constants/routes';
import { DashboardPage } from '@/pages/Dashboard';
import { DomainsPage } from '@/pages/Domains';
import { LoginPage } from '@/pages/Login';
import { Routes as ReactRoutes, Route } from 'react-router';

import { ProtectedRoute } from './components/Routes/ProtectedRoute';
import { PublicRoute } from './components/Routes/PublicRoute';
import { CapabilitiesPage } from './pages/Capabilities';
import { IntegrationsPage } from './pages/Integrations';
import { ProfilesPage } from './pages/Profiles';

const App = () => {
  return (
    <ReactRoutes>
      <Route path={Routes.LOGIN} element={<UnauthorizedLayout />}>
        <Route
          index
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
      </Route>

      <Route path={Routes.INDEX} element={<AuthorizedLayout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={Routes.DOMAINS}
          element={
            <ProtectedRoute>
              <DomainsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={Routes.CAPABILITIES}
          element={
            <ProtectedRoute>
              <CapabilitiesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={Routes.INTEGRATIONS}
          element={
            <ProtectedRoute>
              <IntegrationsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path={Routes.PROFILES}
          element={
            <ProtectedRoute>
              <ProfilesPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </ReactRoutes>
  );
};

export default App;
