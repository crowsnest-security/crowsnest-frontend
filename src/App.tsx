import { AuthorizedLayout, UnauthorizedLayout } from '@/components/Layout';
import { Routes } from '@/contstants/routes';
import { LoginPage } from '@/pages/Login';
import { Routes as ReactRoutes, Route } from 'react-router';

const App = () => {
  return (
    <ReactRoutes>
      <Route path={Routes.LOGIN} element={<UnauthorizedLayout />}>
        <Route index element={<LoginPage />} />
      </Route>

      <Route path={Routes.INDEX} element={<AuthorizedLayout />}>
        <Route index element={<span>Home</span>} />
      </Route>
    </ReactRoutes>
  );
};

export default App;
