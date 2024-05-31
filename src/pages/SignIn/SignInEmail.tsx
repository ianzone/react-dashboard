import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { Alert, Button, Checkbox, Form, Input } from 'antd';
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
      name='signin'
      layout='vertical'
      initialValues={{ remember: true }}
      onFinish={mutate}
      style={{ width: '100%' }}
    >
      <Form.Item<FieldType>
        label='Email'
        name='email'
        rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item<FieldType> name='remember' valuePropName='checked'>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit' style={{ width: '100%' }} loading={isPending}>
          Submit
        </Button>
      </Form.Item>
      {isError && <Alert message={error.message} type='error' showIcon closable />}
    </Form>
  );
}
