type FigureProps = {
  width?: string;
  style?: React.CSSProperties;
  src: string;
  title?: string;
  alt?: string;
  caption?: string;
};

export function Figure({ style, src, title, alt, caption, width }: FigureProps) {
  const fileName = src.split('/').pop();
  return (
    <figure
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <img src={src} title={title ?? fileName} alt={alt ?? fileName} style={{ width }} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
