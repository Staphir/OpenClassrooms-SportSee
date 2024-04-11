import './style.scss';
import { Text, Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

function renderPolarAngleAxis({ payload, x, y, cx, cy }) {
  return (
    <Text
      fontSize="12px"
      fill='white'
      verticalAnchor="middle"
      y={ cy > y ? y - 10 : y + 5}
      x={ cx < x ? x - 15 : cx === x ? x - 17 : x - 30}
    >
      {payload.value}
    </Text>
  );
}

function RadarChartContainer({data}) {

    return (
        <ResponsiveContainer className="radar-chart" aspect={1}>
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="80%"
            data={data}
          >
            <PolarGrid stroke='white' radialLines={false}/>
            <PolarAngleAxis tick={renderPolarAngleAxis} dataKey="kind" tickLine={false} stroke='white'/>
            <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
          </RadarChart>
      </ResponsiveContainer>
    )
}

export default RadarChartContainer;