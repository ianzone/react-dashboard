import { Flex, Segmented } from 'antd';
import { useState } from 'react';
import { Password } from './Password';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

export function Segments() {
  const signIn = 'Sign In';
  const signUp = 'Sign Up';
  const resetPass = 'Reset Password';
  const [select, setSelect] = useState(signIn);
  const getForm = (select: string) => {
    if (select === signIn) {
      return <SignIn />;
    }
    if (select === signUp) {
      return <SignUp />;
    }
    if (select === resetPass) {
      return <Password />;
    }
  };

  return (
    <Flex vertical align='center'>
      <Segmented<string>
        style={{ margin: '20px' }}
        options={[signIn, resetPass, signUp]}
        onChange={(value) => {
          setSelect(value);
        }}
      />
      {getForm(select)}
    </Flex>
  );
}
