import { Button, Checkbox, Form, Input } from 'antd';

type FieldType = {
  username: string;
  password: string;
  remember: boolean;
};

const onFinish = (values: FieldType) => {
  console.log('Success:', values);
};

export function SignIn() {
  return (
    <Form
      name='signin'
      layout='vertical'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{ width: '100%' }}
    >
      <Form.Item<FieldType>
        label='Username'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
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
        <Button type='primary' htmlType='submit' style={{ width: '100%' }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
