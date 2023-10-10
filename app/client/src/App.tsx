import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import {
  Admin,
  Browse,
  DashboardLayout,
  Landing,
  Login,
  ManageCourses,
  ManageUsers,
  Plans,
  Settings,
  SignUp,
} from './pages';
import { loginAction, registerAction, settingAction } from './utils/actions';
import { adminLoader, dashboardLoader } from './utils/loaders';

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
          { path: 'settings', element: <Settings />, action: settingAction },
        ],
      },
      {
        path: 'admin',
        element: <Admin />,
        loader: adminLoader,
        children: [
          {
            index: true,
            element: <ManageUsers />,
          },
          {
            path: 'courses',
            element: <ManageCourses />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
