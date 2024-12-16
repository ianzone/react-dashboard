import { Link } from '@tanstack/react-router';
import { Flex } from 'antd';
import { Selector } from 'src/components';
import { SignInEmail } from './SignInEmail';
import { SignInPhone } from './SignInPhone';
import { SignInSSO } from './SignInSSO';
import { SignInSocial } from './SignInSocial';

export function SignIn() {
  return (
    <Flex vertical align='center'>
      <Selector
        options={{
          Email: <SignInEmail />,
          Phone: <SignInPhone />,
          Social: <SignInSocial />,
          SSO: <SignInSSO />,
        }}
      />
      New to Dashboard?
      <Link to='/signup'>Create an account</Link>
    </Flex>
  );
}
