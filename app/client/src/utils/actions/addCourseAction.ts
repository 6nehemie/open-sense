import { ActionFunctionArgs, redirect } from 'react-router-dom';
import customFetch from '../customFetch';
import { AxiosError } from 'axios';

export const addCourseAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const file = formData.get('thumbnail') as File;

  const data = Object.fromEntries(formData);

  if (file && file.size > 50000) return 'Image size is too big';

  try {
    await customFetch.post('/courses/add-course', formData);

    return redirect('/courses');
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.message);
      return error?.response?.data?.message || 'Something went wrong';
    }
    return error || 'Something went wrong';
  }
};
