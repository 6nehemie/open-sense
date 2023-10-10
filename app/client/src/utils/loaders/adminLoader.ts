import { redirect } from 'react-router-dom';
import customFetch from '../customFetch';

export const adminLoader = async () => {
  try {
    const response = await customFetch.get('/users/current-user');
    if (response.data.role !== 'admin') {
      return redirect('/browse');
    }
    return response.data;
  } catch (error) {
    return redirect('/');
  }
};
