import { ActionFunctionArgs } from 'react-router-dom';
import customFetch from '../customFetch';
import { AxiosError } from 'axios';

export const registerAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post('/auth/sign-up', data);
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.message);
      return error?.response?.data?.message;
    }
    return error || 'Something went wrong';
  }
};
