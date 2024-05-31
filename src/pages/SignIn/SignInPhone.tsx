import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { Alert, Button, Checkbox, Form, Input } from 'antd';
import { signIn } from 'src/services';

type FieldType = {
  phone: string;
  otp: string;
  remember: boolean;
};

export function SignInPhone() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      navigate({ to: '/' });
    },
  });

  return (
    <Form
      name='SignInPhone'
      layout='vertical'
      initialValues={{ remember: true }}
      onFinish={mutate}
      style={{ width: '100%' }}
    >
      <Form.Item<FieldType>
        label='Phone'
        name='phone'
        rules={[{ required: true, type: 'string', message: 'Please input your phone!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<FieldType>
        label='OTP code'
        name='otp'
        rules={[{ required: true, message: 'Please input your OTP code!' }]}
      >
        <Input />
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
