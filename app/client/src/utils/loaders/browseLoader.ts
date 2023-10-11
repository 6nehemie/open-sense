import { AxiosError } from 'axios';

export const browseLoader = async () => {
  try {
    const response = await fetch('/courses');
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.message);
      return error?.response?.data?.message || 'Something went wrong';
    }
    return error || 'Something went wrong';
  }
};
