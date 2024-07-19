import { Flex as AntFlex, type GetProps, theme } from 'antd';

type FlexProps = GetProps<typeof AntFlex>;

export function Box(props: FlexProps) {
  const { style, children, ...rest } = props;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AntFlex
      vertical
      align='center'
      justify='center'
      style={{
        height: '100%',
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        ...style,
      }}
      {...rest}
    >
      {children}
    </AntFlex>
  );
}
