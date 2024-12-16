import { Link } from '@tanstack/react-router';

export function ForgotPass() {
  return (
    <div>
      <h1>ForgotPassword</h1>
      <Link to='/signin'>Sign in</Link>
    </div>
  );
}
