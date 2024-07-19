import { Layout as AntLayout, type GetProps } from 'antd';
const { Content, Footer } = AntLayout;

type LayoutProps = GetProps<typeof AntLayout>;

function Layout(props: LayoutProps) {
  const { style, children, ...rest } = props;
  return (
    <AntLayout style={{ height: '100%', width: '100%', ...style }} {...rest}>
      {children}
    </AntLayout>
  );
}

export { Layout, Content, Footer };
