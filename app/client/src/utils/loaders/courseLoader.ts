import { ActionFunctionArgs } from 'react-router-dom';
import customFetch from '../customFetch';
import { AxiosError } from 'axios';

export const getAllCoursesLoader = async () => {
  try {
    const response = await customFetch.get('/courses');
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.message);
      return error?.response?.data?.message || 'Something went wrong';
    }
    return error || 'Something went wrong';
  }
};

export const getSingleCourseLoader = async ({ params }: ActionFunctionArgs) => {
  try {
    const response = await customFetch.get(`/courses/${params.id}`);
    return response.data.course;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.message);
      return error?.response?.data?.message || 'Something went wrong';
    }
    return error || 'Something went wrong';
  }
};
