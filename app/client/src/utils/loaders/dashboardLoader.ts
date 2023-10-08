import customFetch from '../customFetch';

export const dashboardLoader = async () => {
  try {
    const response = await customFetch('/api/auth/current-user');
    return response;
  } catch (error) {
    console.log(error);
    // return redirect('/');
    return null;
  }
};
