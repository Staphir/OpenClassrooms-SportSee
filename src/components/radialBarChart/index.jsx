import './style.scss';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

function customLabel({ payload, x, y, width, height, value }) {
  return <text fill='#282D30' textAnchor='end'>{value + '%\nde votre\nobjectif'}</text>
}

function RadialBarChartContainer({name, data}) {
  
    return (
    <ResponsiveContainer className="radial-bar-chart" width="100%" height="100%">
        <p className='chart-title'>Score</p>
        <RadialBarChart innerRadius="55%" outerRadius="80%"  startAngle={90} endAngle={450} barSize={15} data={data}>
          <RadialBar
            label={customLabel}
            dataKey="todayScore"
          />
        </RadialBarChart>
      </ResponsiveContainer>
    )
}

export default RadialBarChartContainer;