import { redirect } from 'react-router-dom';
import customFetch from '../customFetch';

export const dashboardLoader = async () => {
  try {
    const response = await customFetch.get('/users/current-user');
    const courses = await customFetch.get('/courses');
    // console.log(courses.data);
    return { data: response.data, courses: courses.data.courses };
  } catch (error) {
    return redirect('/');
  }
};
