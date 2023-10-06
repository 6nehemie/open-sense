import { Link } from 'react-router-dom';
import {
  AuthInput,
  AuthSubmitBtn,
  AuthWrapper,
  CustomNavbar,
  PasswordInput,
} from '../components';
import { auth } from '../constants';

const SignUp = () => {
  return (
    <div className="relative min-h-screen p-side grid login-grid  max-md:bg-white">
      <CustomNavbar label="Log In" href="/sign-in" logoHref="/" light={true} />

      <div className="w-full flex items-center justify-center row-start-2">
        <AuthWrapper label={auth.singUp.label} message={auth.singUp.text}>
          <form action="" className="flex flex-col gap-5">
            <AuthInput
              label="Your name*"
              name="name"
              type="text"
              required={true}
              placeholder="Your name"
            />

            <AuthInput
              label="Your email address*"
              name="email"
              type="email"
              required={true}
              placeholder="Your email address"
            />

            <PasswordInput
              label="Your password*"
              name="password"
              required={true}
              placeholder="Your password"
            />

            <PasswordInput
              label="Password Confirm*"
              name="password"
              required={true}
              placeholder="Password Confirm"
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
export default SignUp;
