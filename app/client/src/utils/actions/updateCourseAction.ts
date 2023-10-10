import { ActionFunctionArgs, redirect } from 'react-router-dom';
import customFetch from '../customFetch';
import { AxiosError } from 'axios';

export const updateCourseAction = async ({
  params,
  request,
}: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log(data);

  console.log(params.id);

  // const file = formData.get('thumbnail') as File;

  // const data = Object.fromEntries(formData);

  // if (file && file.size > 50000) return 'Image size is too big'; //! check for this line (50kb)

  try {
    await customFetch.patch(`/courses/${params.id}`, formData);

    return null;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.message);
      return error?.response?.data?.message || 'Something went wrong';
    }
    return error || 'Something went wrong';
  }
};
