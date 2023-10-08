import { Link, Form, useNavigation } from 'react-router-dom';
import {
  AuthInput,
  AuthSubmitBtn,
  AuthWrapper,
  CustomNavbar,
  PasswordInput,
} from '../components';
import { useActionData } from 'react-router-dom';
import { auth } from '../constants';
import { useEffect, useState } from 'react';
import { loginErrors } from '../utils/errors/loginErrors';

const Login = () => {
  const errors = useActionData() as string;
  const navigation = useNavigation();
  const loading = navigation.state === 'submitting';
  const [loginError, setLoginError] = useState<{
    email: string;
    password: string;
  }>();

  useEffect(() => {
    if (errors) {
      setLoginError(loginErrors(errors));
    }
  }, [errors]);

  return (
    <div className="relative min-h-screen p-side grid login-grid  max-md:bg-white">
      <CustomNavbar label="Sign Up" href="/sign-up" logoHref="/" light={true} />

      <div className="w-full flex items-center justify-center row-start-2">
        <AuthWrapper label={auth.login.label} message={auth.login.text}>
          <Form method="post" className="flex flex-col gap-5">
            <AuthInput
              label="Your email address*"
              name="email"
              type="email"
              // required={true}
              error={loginError?.email}
              defaultValue="test@test.com"
              placeholder="Your email address"
            />

            <PasswordInput
              label="Your password*"
              name="password"
              defaultValue="test1234"
              // required={true}
              error={loginError?.password}
              placeholder="Your password"
            />

            <AuthSubmitBtn label="Log In" disabled={loading} />

            <Link to={'.'} className="text-center">
              Forgot your password ?
            </Link>
          </Form>
        </AuthWrapper>
      </div>
    </div>
  );
};
export default Login;
