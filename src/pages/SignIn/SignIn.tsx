import { Flex, Segmented } from 'antd';
import { useState } from 'react';
import { SignInEmail } from './SignInEmail';
import { SignInPhone } from './SignInPhone';
import { SignInSSO } from './SignInSSO';
import { SignInSocial } from './SignInSocial';

export function SignIn() {
  const signMethod = ['Email', 'Phone', 'Social', 'SSO'];
  const [select, setSelect] = useState(signMethod[0]);

  return (
    <Flex vertical align='center'>
      <Segmented<string>
        style={{ margin: '20px' }}
        options={signMethod}
        onChange={(value) => {
          setSelect(value);
        }}
      />
      {SignInMethod(select)}
    </Flex>
  );
}

function SignInMethod(method: string) {
  switch (method) {
    case 'Email':
      return <SignInEmail />;
    case 'Phone':
      return <SignInPhone />;
    case 'Social':
      return <SignInSocial />;
    case 'SSO':
      return <SignInSSO />;
    default:
      return null;
  }
}
