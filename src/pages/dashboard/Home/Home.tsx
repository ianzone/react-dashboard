import { Grid, GridCell } from 'antd-enhanced';
// import { Column, RadialBar, Scatter } from '@ant-design/charts';
// import { useSize } from 'ahooks';
// import { Calendar } from 'antd';
// import { useRef } from 'react';
import { Card } from 'src/components';
// import styles from './styles.module.css';

export function Home() {
  // https://github.com/ant-design/ant-design-charts/issues/2568
  // const colChartRef = useRef(null);
  // const colChartSize = useSize(colChartRef);

  return (
    <Grid rows={6} cols={4} gap='1.2rem'>
      <GridCell rowIndex={0} colIndex={0}>
        <Card>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </GridCell>
      <GridCell rowIndex={0} colIndex={1}>
        <Card>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </GridCell>
      <GridCell rowIndex={0} colIndex={2}>
        <Card>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </GridCell>
      <GridCell rowIndex={0} colIndex={3}>
        <Card>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </GridCell>
      {/* <GridCell pin={[2, 1]} rows={3} cols={2}>
        <Card ref={colChartRef}>
          <Column
            {...{
              theme: 'classicDark',
              data: {
                type: 'fetch',
                value: 'https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json',
              },
              height: colChartSize && colChartSize.height - 48,
              xField: '月份',
              yField: '月均降雨量',
              colorField: 'name',
              group: true,
              style: {
                inset: 5,
              },
            }}
          />
        </Card>
      </GridCell>
      <GridCell pin={[2, 4]} rows={2}>
        <Calendar
          fullscreen={
            // https://github.com/ant-design/ant-design/issues/46567
            false
          }
          className={styles.calendar}
        />
      </GridCell>
      <GridCell pin={[5, 1]} rows={2} cols={2}>
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
      </GridCell>
      <GridCell pin={[2, 3]} rows={3}>
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
                GridCells: ['star'],
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
      </GridCell> */}
      <GridCell rowIndex={4} colIndex={2} rows={2}>
        <Card>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </GridCell>
      <GridCell rowIndex={3} colIndex={3} rows={3}>
        <Card>
          <p>Task</p>
          <p>Task</p>
          <p>Task</p>
        </Card>
      </GridCell>
    </Grid>
  );
}
