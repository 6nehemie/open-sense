import { ActionFunctionArgs } from 'react-router-dom';
import customFetch from '../customFetch';
import { AxiosError } from 'axios';

export const lessonLoader = async ({ params }: ActionFunctionArgs) => {
  const id = params.id;

  try {
    const { data } = await customFetch(`/courses/${id}`);
    const chapters = await customFetch(`/chapters/${id}`);
    return { course: data.course, chapters: chapters.data.chapters };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.message);
      return error?.response?.data?.message || 'Something went wrong';
    }
    return error || 'Something went wrong';
  }
};
