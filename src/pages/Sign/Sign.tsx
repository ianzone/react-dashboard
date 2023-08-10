import { ForgotPassword } from './ForgotPassword';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export function Sign() {
  return (
    <div>
      <h1>Sign</h1>
      <SignIn />
      <ForgotPassword />
      <SignUp />
    </div>
  );
}
