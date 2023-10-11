import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import {
  Admin,
  Browse,
  DashboardLayout,
  EditCourse,
  Landing,
  Lessons,
  Login,
  ManageCourses,
  ManageUsers,
  NewCourse,
  Plans,
  Settings,
  SignUp,
} from './pages';
import {
  addCourseAction,
  loginAction,
  registerAction,
  settingAction,
  updateCourseAction,
} from './utils/actions';
import {
  adminLoader,
  dashboardLoader,
  getAllCoursesLoader,
  getSingleCourseLoader,
  getUsersLoader,
} from './utils/loaders';

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
            loader: getUsersLoader,
          },
          {
            path: 'courses',
            element: <ManageCourses />,
            loader: getAllCoursesLoader,
          },
          {
            path: 'new-course',
            element: <NewCourse />,
            action: addCourseAction,
          },
          {
            path: 'courses/edit-course/:id',
            element: <EditCourse />,
            action: updateCourseAction,
            loader: getSingleCourseLoader,
          },
          {
            path: 'courses/:id/lessons',
            element: <Lessons />,
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
