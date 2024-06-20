type GridProps = {
  rows: number;
  cols: number;
  gap?: string;
  styles?: React.CSSProperties;
  children: React.ReactNode;
};

export function Grid(props: GridProps) {
  const { rows, cols, gap, styles, children } = props;

  return (
    <div
      style={{
        display: 'grid',
        width: '100%',
        height: '100%',
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap,
        ...styles,
      }}
    >
      {children}
    </div>
  );
}

type ItemProps = {
  // coordinates of start cell
  coord: [number, number];
  rows?: number;
  cols?: number;
  styles?: React.CSSProperties;
  children: React.ReactNode;
};

export function Item({ coord, styles, children, rows = 1, cols = 1 }: ItemProps) {
  return (
    <div
      style={{
        gridArea: `${coord[0]} / ${coord[1]} / ${coord[0] + rows} / ${coord[1] + cols}`,
        ...styles,
      }}
    >
      {children}
    </div>
  );
}
