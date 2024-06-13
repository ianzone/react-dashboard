import { Popover, QRCode, Space, Typography } from 'antd';
const { Text } = Typography;
import { Figure } from 'src/components';

function FigureLink({ href, src, caption }: { href: string; src: string; caption?: string }) {
  return (
    <a target='_blank' href={href} rel='noreferrer'>
      <Text>
        <Figure width='2rem' src={src} caption={caption} />
      </Text>
    </a>
  );
}

function FigureLinkQR({ href, src, caption }: { href: string; src: string; caption?: string }) {
  // https://ant-design.antgroup.com/components/popover-cn?theme=dark#%E4%B8%BA%E4%BD%95%E5%9C%A8%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F%E4%B8%AD%E6%9C%89%E6%97%B6%E5%80%99%E4%BC%9A%E5%87%BA%E7%8E%B0-finddomnode-is-deprecated-%E8%BF%99%E4%B8%AA%E8%AD%A6%E5%91%8A
  return (
    <Popover placement='bottom' content={<QRCode value={href} />}>
      <div>
        <FigureLink href={href} src={src} caption={caption} />
      </div>
    </Popover>
  );
}

function Platforms(props: {
  downloads: {
    win?: string;
    mac?: string;
    linux?: string;
    ios?: string;
    android?: string;
  };
}) {
  const { win, mac, linux, ios, android } = props.downloads;
  return (
    <Space size='large'>
      {win && <FigureLink href={win} src='/windows.svg' caption='Windows' />}
      {mac && <FigureLink href={mac} src='/macos.svg' caption='macOS' />}
      {linux && <FigureLink href={linux} src='/linux.svg' caption='Linux' />}

      {ios && <FigureLinkQR href={ios} src='/app_store.svg' caption='App Store' />}
      {android && <FigureLinkQR href={android} src='/google_play.svg' caption='Google Play' />}
    </Space>
  );
}

export function Downloads() {
  const downloads = {
    win: 'https://www.microsoft.com/en-us/software-download/',
    mac: 'https://www.apple.com/macos/',
    linux: 'https://ubuntu.com/',
    ios: 'https://apps.apple.com/in/app/expo-go/id982107779',
    android: 'https://play.google.com/store/apps/details?id=host.exp.exponent',
  };

  return (
    <Popover placement='bottom' content={<Platforms downloads={downloads} />}>
      <Text style={{ cursor: 'pointer' }}>下载</Text>
    </Popover>
  );
}
