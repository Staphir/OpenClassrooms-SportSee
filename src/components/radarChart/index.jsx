import './style.scss';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function RadarChartContainer({data}) {

    return (
        <ResponsiveContainer className="radar-chart" width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke='white'/>
          <PolarAngleAxis dataKey="kind" tickLine={false} stroke='white'/>
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    )
}

export default RadarChartContainer;