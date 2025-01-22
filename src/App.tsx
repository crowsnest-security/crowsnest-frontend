import { Layout } from '@/components/Layout';
import { Routes } from '@/contstants/routes';
import { LoginPage } from '@/pages/Login';
import { Routes as ReactRoutes, Route } from 'react-router';

const App = () => {
  return (
    <ReactRoutes>
      <Route path={Routes.INDEX} element={<Layout />}>
        <Route index element={<span>Home</span>} />
        <Route path={Routes.LOGIN} element={<LoginPage />} />
      </Route>
    </ReactRoutes>
  );
};

export default App;
