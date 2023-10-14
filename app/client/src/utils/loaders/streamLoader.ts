import { AxiosError } from 'axios';
import customFetch from '../customFetch';
import { ActionFunctionArgs } from 'react-router-dom';

export const streamLoader = async ({ params }: ActionFunctionArgs) => {
  try {
    const {
      data: { course },
    } = await customFetch.get(`/courses/course/${params.courseId}`);

    return course;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.message);
      return error?.response?.data?.message || 'Something went wrong';
    }
    return error || 'Something went wrong';
  }
};
