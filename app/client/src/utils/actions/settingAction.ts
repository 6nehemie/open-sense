import { ActionFunctionArgs } from 'react-router-dom';
import customFetch from '../customFetch';
import { AxiosError } from 'axios';

export const settingAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const file = formData.get('avatar') as File;

  if (file && file.size < 50000) return 'Image size is too big';
  // sending formData instead of object data due of the file being send as well

  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch('/users/update-user', formData);
    if (!data) throw new Error('No data');

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.message);
      return error?.response?.data?.message || 'Something went wrong';
    }
    return error || 'Something went wrong';
  }
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const file = formData.get('avatar') as File;

  if (file && file.size < 50000) {
    return 'Image size too large';
  }

  try {
    await customFetch.patch('/users/update-user', formData);
  } catch (error) {
    if (error instanceof AxiosError) {
      return error?.response?.data?.message;
    }
    return error;
  }
  return null;
};
