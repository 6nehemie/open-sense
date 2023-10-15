import { Form, useActionData, useNavigation } from 'react-router-dom';
import {
  AuthInput,
  AuthSubmitBtn,
  AuthWrapper,
  CustomNavbar,
  PasswordInput,
} from '../components';
import { auth } from '../constants';
import { useEffect, useState } from 'react';
import { registerErrors } from '../utils/errors/registerErrors';

const SignUp = () => {
  document.title = 'Open Sense | Sign Up';
  const errors = useActionData() as string;
  const navigation = useNavigation();
  const loading = navigation.state === 'submitting';
  const [registerError, setRegisterError] = useState<{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }>();

  useEffect(() => {
    if (errors) {
      setRegisterError(registerErrors(errors));
    }
  }, [errors]);
  return (
    <div className="relative min-h-screen p-side grid login-grid  max-md:bg-white">
      <CustomNavbar label="Log In" href="/sign-in" logoHref="/" light={true} />

      <div className="w-full flex items-center justify-center row-start-2">
        <AuthWrapper label={auth.singUp.label} message={auth.singUp.text}>
          <Form method="post" action="" className="flex flex-col gap-5">
            <AuthInput
              label="Your name*"
              name="name"
              type="text"
              // required={true}
              error={registerError?.name}
              defaultValue="User Two"
              placeholder="Your name"
            />

            <AuthInput
              label="Your email address*"
              name="email"
              type="email"
              defaultValue="nehemie.mbg@gmail.com"
              error={registerError?.email}
              // required={true}
              placeholder="Your email address"
            />

            <PasswordInput
              label="Your password*"
              name="password"
              defaultValue="test1234"
              error={registerError?.password}
              // required={true}
              placeholder="Your password"
            />

            <PasswordInput
              label="Password Confirm*"
              name="confirmPassword"
              defaultValue="test1234"
              error={registerError?.confirmPassword}
              // required={true}
              placeholder="Password Confirm"
            />

            <AuthSubmitBtn label="Sign Up" disabled={loading} />
          </Form>
        </AuthWrapper>
      </div>
    </div>
  );
};
export default SignUp;
