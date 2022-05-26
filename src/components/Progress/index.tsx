import React from "react";
import { Gauge } from '@ant-design/plots';
import {Title, Center} from './styles'

interface IProps{
  title:string
  value:number,
  max:number,
  min:number,
  minProgress:number,
  mediumProgress:number,
}


const Progress: React.FC<IProps> = ({title,value,max,min, minProgress,mediumProgress}) => {

  const config = {
    percent: value/max,
    type: 'meter',
    innerRadius: 0.75,
    range: {
      ticks: [0, minProgress/max, mediumProgress/max, 1],
      color: [ '#FAAD14','#30BF78', '#F4664A'],
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }: any) => `${ (percent * max).toFixed(2) }`,
        style: {
          fontSize: '30px',
          lineHeight: '36px',
        },
      },
    },
    axis:{
      label: {
        formatter:(v: any)=>Number(v) * max,
      },

    },
  };

  return <Center>
    <div style={{maxWidth:400}}>
      <Title>{title}</Title>
      <Gauge {...config} style={{marginTop:-70, width:300,minWidth:200}} />
    </div>;
  </Center>
};

export default Progress;
