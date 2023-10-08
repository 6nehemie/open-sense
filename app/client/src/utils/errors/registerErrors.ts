export const registerErrors = (error: string) => {
  if (typeof error !== 'string') return;

  const errors = error.split(',');
  const errorObject = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  console.log(errors, error);

  errors.forEach((err: string) => {
    if (err.toLocaleLowerCase().includes('name')) {
      errorObject.name = err;
    }
    if (err.toLocaleLowerCase().includes('email')) {
      errorObject.email = err;
    }
    if (err.toLocaleLowerCase().includes('password')) {
      errorObject.password = err;
    }
    if (err.toLocaleLowerCase().includes('match')) {
      errorObject.confirmPassword = err;
    }
  });

  return errorObject;
};
