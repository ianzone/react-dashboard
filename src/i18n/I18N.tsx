import { Dropdown, type MenuProps } from 'antd';
import { RiTranslate } from 'react-icons/ri';

export function I18N() {
  const items: MenuProps['items'] = [
    {
      key: 'chinese',
      label: '中文',
    },
    {
      key: 'english',
      label: 'English',
    },
  ];
  return (
    <Dropdown menu={{ items }}>
      <div>
        <RiTranslate />
      </div>
    </Dropdown>
  );
}
