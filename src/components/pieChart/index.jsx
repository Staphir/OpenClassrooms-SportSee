import { Fragment } from 'react';
import './style.scss';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function customLabel({ cx, cy, percent, index }) {
    if(index === 0){
        return (
            <Fragment>
                <text fill='#282D30' textAnchor="middle" dominantBaseline="central" fontSize={26} fontWeight="bold" x={cx} y={cy - 20}>{percent*100 + '%'}</text>
                <text fill='#74798C' textAnchor="middle" dominantBaseline="central" fontSize={16} x={cx} y={cy}>{'de votre'}</text>
                <text fill='#74798C' textAnchor="middle" dominantBaseline="central" fontSize={16} x={cx} y={cy + 20}>{'objectif'}</text>
            </Fragment>
        )
    } else {
        return 
    }
  }

function PieChartContainer({name, data}) {
    return (
        <ResponsiveContainer className='pie-chart' aspect={1}>
            <p className="chart-title">{name}</p>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={85}
                    outerRadius={95}
                    startAngle={90}
                    endAngle={450}
                    dataKey="todayScore"
                    cornerRadius={50}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill}/>
                    ))}
                </Pie>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={85}
                    dataKey="todayScore"
                    label={customLabel}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="white"/>
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default PieChartContainer;