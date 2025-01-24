import { AuthorizedLayout, UnauthorizedLayout } from '@/components/Layout';
import { Routes } from '@/contstants/routes';
import { LoginPage } from '@/pages/Login';
import { Routes as ReactRoutes, Route } from 'react-router';

import { DashboardPage } from './pages/Dashboard';

const App = () => {
  return (
    <ReactRoutes>
      <Route path={Routes.LOGIN} element={<UnauthorizedLayout />}>
        <Route index element={<LoginPage />} />
      </Route>

      <Route path={Routes.INDEX} element={<AuthorizedLayout />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </ReactRoutes>
  );
};

export default App;
