import { redirect } from 'react-router-dom';
import customFetch from '../customFetch';

export const dashboardLoader = async () => {
  try {
    const response = await customFetch.get('/users/current-user');
    return response.data;
  } catch (error) {
    return redirect('/');
  }
};
