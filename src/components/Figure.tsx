type FigureProps = {
  width?: string;
  style?: React.CSSProperties;
  src: string;
  title?: string;
  alt?: string;
  caption?: string;
};

export function Figure({ style, src, title, alt, caption }: FigureProps) {
  const fileName = src.split('/').pop();
  return (
    <figure
      style={{
        display: 'flex',
        flexDirection: 'column',
        ...style,
      }}
    >
      <img
        src={src}
        title={title ?? fileName}
        alt={alt ?? fileName}
        style={{
          width: '100%',
          height: '10px', // 将图片高度缩到足够小
          objectFit: 'contain', // 保持图片比例
          flexGrow: 1, // 当容器有留白填充高度
        }}
      />
      <figcaption
        style={{
          // 文字短于容器宽度的情况下居中文字
          width: '100%',
          textAlign: 'center',
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
