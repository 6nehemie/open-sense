import { Link } from 'react-router-dom';
import {
  AuthInput,
  AuthSubmitBtn,
  AuthWrapper,
  CustomNavbar,
  PasswordInput,
} from '../components';
import { auth } from '../constants';

const Login = () => {
  return (
    <div className="relative h-screen p-side flex items-center justify-center max-md:bg-white">
      <CustomNavbar label="Sign Up" href="/sign-up" logoHref="/" light={true} />

      <div className="w-full flex items-center justify-center">
        <AuthWrapper label={auth.login.label} message={auth.login.text}>
          <form action="" className="flex flex-col gap-5">
            <AuthInput
              label="Your email address*"
              name="email"
              type="email"
              placeholder="Your email address"
            />

            <PasswordInput
              label="Your password*"
              name="password"
              placeholder="Your password"
            />

            <AuthSubmitBtn label="Log In" />

            <Link to={'.'} className="text-center">
              Forgot your password ?
            </Link>
          </form>
        </AuthWrapper>
      </div>
    </div>
  );
};
export default Login;
