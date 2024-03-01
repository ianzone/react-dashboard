import { ForgotPassword } from './ForgotPassword';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export function Login() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Sign</h1>
      <SignIn />
      <ForgotPassword />
      <SignUp />
    </div>
  );
}
