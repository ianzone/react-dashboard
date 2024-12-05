import { useMutation } from '@tanstack/react-query';
import { Link, useNavigate } from '@tanstack/react-router';
import { Alert, Button, Checkbox, Flex, Form, Input } from 'antd';
const { Item } = Form;
import { InputIntlPhone } from 'antd-enhanced';
import { signIn } from 'src/services';

type FieldType = {
  phone: string;
  otp: string;
  remember: boolean;
};
const TypedForm = Form<FieldType>;
const TypedItem = TypedForm.Item<FieldType>;

export function SignInPhone() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: signIn,
    onSuccess: () => {
      navigate({ to: '/' });
    },
  });

  return (
    <TypedForm
      name='SignInPhone'
      layout='vertical'
      initialValues={{ remember: true }}
      onFinish={(data) => {
        console.log(data);
      }}
      style={{ width: '100%' }}
    >
      <TypedItem
        label='Phone'
        name='phone'
        rules={[{ required: true, type: 'string', message: 'Please input your phone!' }]}
      >
        <InputIntlPhone
          defaultRegion='CN'
          allowClear
          customRegions={[{ value: 'TW', emoji: '🌐' }]}
        />
      </TypedItem>
      <TypedItem
        label='OTP code'
        name='otp'
        rules={[{ required: true, message: 'Please input your OTP code!' }]}
      >
        <Input.OTP />
      </TypedItem>
      <Flex justify='space-between'>
        <TypedItem name='remember' valuePropName='checked'>
          <Checkbox>Remember me</Checkbox>
        </TypedItem>
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
    </TypedForm>
  );
}
