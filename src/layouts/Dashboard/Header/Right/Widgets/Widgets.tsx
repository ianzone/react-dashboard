import { Space } from 'antd';
import { I18N } from 'src/i18n';
import { Notifications } from './Notifications';
import { Theme } from './Theme';

export function Widgets() {
  return (
    <Space size={'middle'}>
      <Theme />
      <I18N />
      <Notifications />
    </Space>
  );
}
