import { useRouter } from '@tanstack/react-router';
import { Button, Result } from 'antd';
import { Box } from 'src/components';

export function NotFound() {
  const { history } = useRouter();
  return (
    <Box>
      <Result
        status='404'
        title='404'
        subTitle='Sorry, the page you visited does not exist.'
        extra={
          <Button type='primary' onClick={() => history.go(-1)}>
            Go Back
          </Button>
        }
      />
    </Box>
  );
}
