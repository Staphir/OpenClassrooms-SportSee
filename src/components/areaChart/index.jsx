import { useState, useEffect, useRef } from 'react';
import './style.scss';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';

function AreaChartContainer({name, data}) {
  // Ratio width/height depending on screen size
  const [aspect, setAspect] = useState(1);
  window.addEventListener('resize', () => {
    window.innerWidth <= 1439 ? setAspect(2.6) : setAspect(1);
  })
  const containerRef = useRef();

  useEffect(() => {
    window.innerWidth <= 1439 ? setAspect(2.6) : setAspect(1);
  },[]);


  // custom tooltip to have right part of chart more darkest 
  const CustomTooltip = ({ active, payload }) => {
    let dotX, dotY, containerWidth, containerHeight = 0;
    let dotXStyle, dotYStyle = ''
    if (active && payload && payload.length) {
      const activeDot = document.querySelector('.recharts-active-dot');
      if(activeDot){
        dotX = activeDot.firstChild.getAttribute('cx');
        dotXStyle = (parseInt(dotX-30)).toString() + 'px';
        dotY = activeDot.firstChild.getAttribute('cy');
        dotYStyle = (parseInt(dotY-55)).toString() + 'px';
        containerWidth = containerRef.current.querySelector('.recharts-wrapper').style.width.split('px')[0];
        containerHeight = containerRef.current.querySelector('.recharts-wrapper').style.height.split('px')[0];
      }
      return (
        <div className='custom-areaChart-tooltip'>
          <div className="tooltip-label-div" style={{left:dotXStyle, top:dotYStyle}}>
            <p className="labelTime">{`${payload[0].value} min`}</p>
          </div>
          {activeDot && (
          <svg width={containerWidth} height={containerHeight}>
            <rect className='darker-tooltiip-zone' width={containerWidth - dotX - 10} height={containerHeight} x={dotX} y="0" />
          </svg>
          )}
        </div>
      );
    }
    return null;
  };  

    return (
        <ResponsiveContainer ref={containerRef} className="area-chart" aspect={aspect}>
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
                <Tooltip content={CustomTooltip}/>
                <Area type="monotone" dataKey="sessionLength" stroke="#AAAAAA" strokeWidth="2" fill="#FF2F2F"/>
            </AreaChart>
        </ResponsiveContainer>
        )
    }
    
    export default AreaChartContainer;