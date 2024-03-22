import './style.scss';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function customLabel({ cx, cy, percent, index }) {
    return <text fill='#282D30' x={cx} y={cy}>{percent*100 + '%'}</text>

    // return (
    //     <div>
    //         <text fill='#282D30' x={cx} y={cy}>{percent*100 + '%'}</text>
    //         <text fill='#74798C' x={cx} y={cy}>{'de votre'}</text>
    //         <text fill='#74798C' x={cx} y={cy}>{'objectif'}</text>
    //     </div>
    // )
  }

function PieChartContainer({name, data}) {

    return (
        <ResponsiveContainer className='pie-chart-container' width="100%" height="100%">
            <p className="chart-title">{name}</p>
            <PieChart width="100%" height="100%">
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={95}
                    outerRadius={110}
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
                    outerRadius={95}
                    dataKey="todayScore"
                    label={customLabel}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="white"/>
                    ))}
                    {/* <Label
                        value={`${data[0].todayScore}%\nde votre\nobjectif`}
                        position="center"
                        fill='#282D30'
                        style={{fontSize:"26px"}}
                    /> */}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default PieChartContainer;