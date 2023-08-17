import { ForgotPassword } from './ForgotPassword';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export function Login() {
  return (
    <div>
      <h1>Sign</h1>
      <SignIn />
      <ForgotPassword />
      <SignUp />
    </div>
  );
}
