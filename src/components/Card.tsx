import { Card as AntCard, type GetProps, type GetRef } from 'antd';
import { type Ref, forwardRef } from 'react';

type CardPropsType = GetProps<typeof AntCard>;
type CardRefType = GetRef<typeof AntCard>;

export const Card = forwardRef((props: CardPropsType, ref: Ref<CardRefType>) => {
  return (
    <AntCard
      style={{ height: '100%' }}
      styles={{ body: { height: '100%' } }}
      {...props}
      ref={ref}
    />
  );
});

export const { Meta: CardMeta, Grid: CardGrid } = AntCard;
