import { Selector } from 'src/components';
import { SignInEmail } from './SignInEmail';
import { SignInPhone } from './SignInPhone';
import { SignInSSO } from './SignInSSO';
import { SignInSocial } from './SignInSocial';

export function SignIn() {
  return (
    <Selector
      options={{
        Email: <SignInEmail />,
        Phone: <SignInPhone />,
        Social: <SignInSocial />,
        SSO: <SignInSSO />,
      }}
    />
  );
}
