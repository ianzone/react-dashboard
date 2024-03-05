interface Props {
  width?: string;
  style?: React.CSSProperties;
  src: string;
  alt?: string;
  caption?: string;
}

export function Figure({ style, src, alt, caption, width }: Props) {
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
      <img src={src} alt={alt} style={{ width }} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
