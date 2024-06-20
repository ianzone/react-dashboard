import { Flex, Segmented } from 'antd';
import { useState } from 'react';

type SelectorProps = {
  options: Record<string, JSX.Element>;
};

export function Selector(props: SelectorProps) {
  const { options } = props;
  const keys = Object.keys(options);
  const [selected, setSelected] = useState(keys[0]);
  return (
    <Flex vertical align='center'>
      <Segmented<string>
        style={{ margin: '20px' }}
        options={keys}
        onChange={(key) => {
          setSelected(key);
        }}
      />
      {options[selected]}
    </Flex>
  );
}
