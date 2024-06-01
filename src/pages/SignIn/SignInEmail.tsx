import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from '@tanstack/react-router';
import { Alert, Button, Checkbox, Flex, Form, Input } from 'antd';
const { Item } = Form;
import { signIn } from 'src/services';

type FieldType = {
  email: string;
  password: string;
  remember: boolean;
};

export function SignInEmail() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      navigate({ to: '/' });
    },
  });

  return (
    <Form
      name='SignInEmail'
      layout='vertical'
      initialValues={{ remember: true }}
      onFinish={mutate}
      style={{ width: '100%' }}
    >
      <Item<FieldType>
        label='Email'
        name='email'
        rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
      >
        <Input />
      </Item>
      <Item<FieldType>
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Item>
      <Flex justify='space-between'>
        <Item<FieldType> name='remember' valuePropName='checked'>
          <Checkbox>Remember me</Checkbox>
        </Item>
        <Item>
          <Link to='/forgotpass'>Forgot password?</Link>
        </Item>
      </Flex>
      <Item>
        <Button type='primary' htmlType='submit' style={{ width: '100%' }} loading={isPending}>
          Submit
        </Button>
      </Item>
      {isError && <Alert message={error.message} type='error' showIcon closable />}
    </Form>
  );
}
