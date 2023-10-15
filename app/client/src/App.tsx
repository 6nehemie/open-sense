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
  Stream,
  StreamLayout,
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
  lessonLoader,
} from './utils/loaders';
import { streamLoader } from './utils/loaders/streamLoader';
import { loginLoader } from './utils/loaders/loginLoader';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      {
        path: 'sign-in',
        element: <Login />,
        action: loginAction,
        loader: loginLoader,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
        action: registerAction,
        loader: loginLoader,
      },
      { path: 'plans', element: <Plans /> },
      {
        path: 'browse',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          { index: true, element: <Browse /> },
          { path: 'settings', element: <Settings />, action: settingAction },
          {
            path: 'courses/:courseId',
            element: <StreamLayout />,
            loader: streamLoader,
            children: [
              {
                path: ':lessonId',
                element: <Stream />,
                loader: streamLoader,
              },
            ],
          },
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
            loader: lessonLoader,
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
