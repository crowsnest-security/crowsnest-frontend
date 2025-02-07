import { AuthorizedLayout, UnauthorizedLayout } from '@/components/Layout';
import { Routes } from '@/constants/routes';
import { DashboardPage } from '@/pages/Dashboard';
import { DomainsPage } from '@/pages/Domains';
import { LoginPage } from '@/pages/Login';
import { Routes as ReactRoutes, Route } from 'react-router';

import { CapabilitiesPage } from './pages/Capabilities';

const App = () => {
  return (
    <ReactRoutes>
      <Route path={Routes.LOGIN} element={<UnauthorizedLayout />}>
        <Route index element={<LoginPage />} />
      </Route>

      <Route path={Routes.INDEX} element={<AuthorizedLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path={Routes.DOMAINS} element={<DomainsPage />} />
        <Route path={Routes.CAPABILITIES} element={<CapabilitiesPage />} />
      </Route>
    </ReactRoutes>
  );
};

export default App;
