import './style.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function CustomTooltip({ active, payload, label }) {
    if (active && payload && payload.length) {
      return (
        <div className="custom-barChart-tooltip">
          <p className="labelKg">{`${payload[0].value}Kg`}</p>
          <p className="labelKcal">{`${payload[1].value}Kcal`}</p>
        </div>
      );
    }
    return null;
  };

  function legendFormatter(value, entry) {
    let txt = ''
    if(value === 'kilogram')
      txt = 'Poids (kg)'
    else
      txt = 'Calories brûlées (kCal)'
    
    return <span style={{ color:'#74798C', fontSize:'14px', marginRight:'20px' }}>{txt}</span>
  }

function BarChartContainer({name, data}) {
    let dataDomain = [Infinity, -Infinity];


    data.forEach(dataValues => { console.log(dataValues)})
    data.forEach(dataValues => {
        dataDomain[0] = Math.min(dataDomain[0], dataValues.kilogram);
        dataDomain[1] = Math.max(dataDomain[1], dataValues.kilogram);
    });
    dataDomain = [dataDomain[0] - 1, dataDomain[1] + 1];

    return (
      <ResponsiveContainer className="bar-chart" width="100%" height="100%">
      <p className='chart-title'>Activité quotidienne</p>
          <BarChart
              width="100%"
              height="100%"
              data={data}
              margin={{
                  top: 30,
                  right: 10,
                  left: 20,
                  bottom: 25,
              }}
              barSize={7}
              barGap={8}
              
          >
              <CartesianGrid strokeDasharray="3" vertical={false} />
              <XAxis dataKey="day" tickLine={false} stroke="#74798C" dy={15}/>
              <YAxis yAxisId="right" orientation="right" domain={dataDomain} stroke="#74798C" tickLine={false} axisLine={false}/>
              <YAxis yAxisId="left" orientation="left" stroke="#74798C" hide={true}/>
              <Tooltip content={CustomTooltip}/>
              <Legend formatter={legendFormatter} iconType='circle' align='right' verticalAlign='top' iconSize={8} height={80}/>
              <Bar yAxisId="right" dataKey="kilogram" radius={[25, 25, 0, 0]} fill="#282D30"/>
              <Bar yAxisId="left" dataKey="calories" radius={[25, 25, 0, 0]} fill="#FF0101"/>
          </BarChart>
      </ResponsiveContainer>
      )
    }
    
    export default BarChartContainer;