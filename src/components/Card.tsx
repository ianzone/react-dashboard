import { Card as AntCard, type GetProps } from 'antd';

type CardPropsType = GetProps<typeof AntCard>;

export const Card = (props: CardPropsType) => {
  const { style, ...rest } = props;
  return (
    <AntCard
      style={{ height: '100%', width: '100%', ...style }}
      styles={{ body: { height: '100%' } }}
      {...rest}
    />
  );
};

export const { Meta: CardMeta, Grid: CardGrid } = AntCard;
