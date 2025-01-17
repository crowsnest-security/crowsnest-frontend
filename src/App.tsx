import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <Routes>
      <Route index element={<span>Home</span>} />
      <Route path="login" element={<span>Login</span>} />
    </Routes>
  );
};

export default App;
