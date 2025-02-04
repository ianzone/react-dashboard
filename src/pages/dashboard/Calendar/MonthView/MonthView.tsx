import { Grid, GridCell } from 'antd-enhanced';
import { Card } from 'src/components';
import { DayCard } from './DayCard';
import { WeekBar } from './WeekBar';

export function MonthView() {
  const days = [];
  for (let i = 0; i < 35; i++) {
    days.push(<DayCard key={i} />);
  }

  return (
    <Grid rows={7} rowHeights={{ 0: '50px', 1: '50px' }} cols={7}>
      <GridCell rowIndex={0} colIndex={0} cols={7}>
        <Card style={{ borderRadius: 0 }}>
          <p>Toolbar</p>
        </Card>
      </GridCell>

      <WeekBar />
      {days}
    </Grid>
  );
}
