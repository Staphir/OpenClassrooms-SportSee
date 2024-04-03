import './style.scss';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';

function AreaChartContainer({name, data}) {
    
    function CustomTooltip({ active, payload, label }) {
        if (active && payload && payload.length) {
          return (
            <div className="custom-areaChart-tooltip">
              <p className="labelTime">{`${payload[0].value} min`}</p>
            </div>
          );
        }
        return null;
      };

    return (
        <ResponsiveContainer className="area-chart" aspect={1}>
          <p className='chart-title'>Durée moyenne des sessions</p>
            <AreaChart
                data={data}
                margin={{
                    top: 100,
                    right: 10,
                    left: 10,
                    bottom: 0,
                }}
            >
                <XAxis dataKey="day" axisLine={false} stroke='#AAAAAA' tickLine={false}></XAxis>
                <YAxis hide={true}></YAxis>
                <Label value={name} offset={0} position="insideTop" />
                <Tooltip content={CustomTooltip} />
                <Area type="monotone" dataKey="sessionLength" stroke="#AAAAAA" strokeWidth="2" fill="#FF2F2F" />
            </AreaChart>
        </ResponsiveContainer>
        )
    }
    
    export default AreaChartContainer;