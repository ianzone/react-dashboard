import { Column, RadialBar, Scatter } from '@ant-design/charts';
import { Calendar } from 'antd';
import { Card, Grid, Item } from 'src/components';
import styles from './styles.module.css';

const config = {
  theme: 'classicDark',
  data: {
    type: 'fetch',
    value: 'https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json',
  },
  xField: '月份',
  yField: '月均降雨量',
  colorField: 'name',
  group: true,
  style: {
    // 矩形四个方向的内边距
    inset: 5,
    // 矩形单个方向的内边距
    // insetLeft:5,
    // insetRight:20,
    // insetBottom:10
    // insetTop:10
  },
};
export function Home() {
  return (
    <Grid rows={6} cols={4} gap='1.2rem'>
      <Item coord={[1, 1]}>
        <Card>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Item>
      <Item coord={[1, 2]}>
        <Card>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Item>
      <Item coord={[1, 3]}>
        <Card>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Item>
      <Item coord={[1, 4]}>
        <Card>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Item>
      <Item coord={[2, 1]} rows={3} cols={2}>
        <Card>
          <Column {...config} />
        </Card>
      </Item>
      <Item coord={[2, 4]} rows={2}>
        <Calendar
          fullscreen={
            // https://github.com/ant-design/ant-design/issues/46567
            false
          }
          className={styles.calendar}
        />
      </Item>
      <Item coord={[5, 1]} rows={2} cols={2}>
        <Card>
          <Scatter
            {...{
              theme: 'classicDark',
              inset: 10,
              data: {
                type: 'fetch',
                value: 'https://assets.antv.antgroup.com/g2/commits.json',
              },
              xField: (d: any) => new Date(d.time).getUTCHours(),
              yField: (d: any) => new Date(d.time).getUTCDay(),
              sizeField: 'count',
              colorField: 'count',
              shapeField: 'point',
              transform: [{ type: 'group', size: 'sum' }, { type: 'sortY' }],
              scale: { y: { type: 'point' } },
              axis: {
                x: { title: 'time (hours)', tickCount: 24 },
                y: { title: 'time (day)', grid: true },
              },
            }}
          />
        </Card>
      </Item>
      <Item coord={[2, 3]} rows={3}>
        <Card>
          <RadialBar
            {...{
              theme: 'classicDark',
              data: [
                { name: 'X6', star: 297 },
                { name: 'G', star: 506 },
                { name: 'AVA', star: 805 },
                { name: 'G2Plot', star: 1478 },
                { name: 'L7', star: 2029 },
                { name: 'G6', star: 7100 },
                { name: 'F2', star: 7346 },
                { name: 'G2', star: 10178 },
              ],
              xField: 'name',
              yField: 'star',
              maxAngle: 350,
              radius: 1,
              innerRadius: 0.2,
              tooltip: {
                items: ['star'],
              },
              legend: false,
              axis: {
                y: false,
              },
              markBackground: {
                opacity: 0.25,
              },
              scale: {
                y: {
                  domain: [0, 12000], // 设定范围用于背景图的渲染获取最大值
                },
              },
              style: {
                radius: 180,
                fill: ({ star }: { star: number }) => {
                  if (star > 10000) {
                    return '#6349ec';
                  }
                  if (star > 1000) {
                    return '#ff9300';
                  }
                  return '#ff93a7';
                },
              },
            }}
          />
        </Card>
      </Item>
      <Item coord={[5, 3]} rows={2}>
        <Card>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Item>
      <Item coord={[4, 4]} rows={3}>
        <Card>
          <p>Task</p>
          <p>Task</p>
          <p>Task</p>
        </Card>
      </Item>
    </Grid>
  );
}
