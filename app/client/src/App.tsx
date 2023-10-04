import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import { Landing, Login, Plans, Settings, SignUp } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'sign-in', element: <Login /> },
      { path: 'sign-up', element: <SignUp /> },
      { path: 'plans', element: <Plans /> },
      { path: 'browse', element: <Settings /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
