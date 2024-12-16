import { Link } from '@tanstack/react-router';

export function SignUp() {
  return (
    <div>
      <h1>SignUp</h1>
      Have an account? <Link to='/signin'>Sign in</Link>
    </div>
  );
}
