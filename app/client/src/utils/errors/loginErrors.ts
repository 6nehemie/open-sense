export const loginErrors = (error: string) => {
  if (typeof error !== 'string') return;

  const errors = error.split(',');
  const errorObject = {
    email: '',
    password: '',
  };

  console.log(errors, error);

  errors.forEach((err: string) => {
    if (err.toLocaleLowerCase().includes('email')) {
      errorObject.email = err;
    }
    if (err.toLocaleLowerCase().includes('password')) {
      errorObject.password = err;
    }
    if (
      err.toLocaleLowerCase().includes('invalid') &&
      errorObject.email === ''
    ) {
      errorObject.email = err;
      errorObject.password = err;
    }
  });

  return errorObject;
};
