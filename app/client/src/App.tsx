import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import {
  Browse,
  DashboardLayout,
  Landing,
  Login,
  Plans,
  Settings,
  SignUp,
} from './pages';
import { loginAction, registerAction } from './utils/actions';
import { dashboardLoader } from './utils/loaders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: 'sign-in', element: <Login />, action: loginAction },
      { path: 'sign-up', element: <SignUp />, action: registerAction },
      { path: 'plans', element: <Plans /> },
      {
        path: 'browse',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          { index: true, element: <Browse /> },
          { path: 'settings', element: <Settings /> },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
