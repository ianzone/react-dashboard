import { Card as AntCard, type CardProps } from 'antd';

export function Card(props: CardProps) {
  return <AntCard style={{ height: '100%' }} styles={{ body: { height: '100%' } }} {...props} />;
}

export const { Meta: CardMeta, Grid: CardGrid } = AntCard;
