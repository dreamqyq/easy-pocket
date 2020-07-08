import React, { useEffect, useRef, useState } from 'react';
import { EChartOption, ECharts, init } from 'echarts';
import { piePatternImg } from '../views/Chart/pieChartPattern';

type Props = {
  data: Array<{
    name: string;
    value: number;
  }>
}

const itemStyle = {
  normal: {
    opacity: 0.7,
    color: {
      image: piePatternImg,
      repeat: 'repeat'
    },
    borderWidth: 3,
    borderColor: '#235894'
  }
};

const PieChart: React.FC<Props> = (props) => {
  const { data } = props;
  const [options, setOptions] = useState<EChartOption>({
      title: {
        text: '账单统计',
        top: 20,
        left: 20,
        textStyle: {
          color: '#235894'
        }
      },
      tooltip: {
        show: true
      },
      series: [{
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 20,
        clockwise: true,
        label: {
          fontSize: 14,
          fontWeight: 'bold',
          color: '#1a426d',
          position: 'inside'
        },
        data: [],
        labelLine: {
          show: false
        },
        itemStyle: itemStyle
      }]
    }
  );

  const container = useRef({} as HTMLDivElement);
  const chart = useRef({} as ECharts);

  useEffect(() => {
    const width = document.documentElement.clientWidth;
    container.current.style.width = `${width - 20}px`;
    container.current.style.height = `${(width - 20) * 1.2}px`;
    chart.current = init(container.current, 'light');
  }, []);


  useEffect(() => {
    setOptions({
      series: [{
        data
      }]
    });
  }, [data]);

  useEffect(() => {
    chart.current.setOption(options);
  }, [options]);

  return (
    <div ref={container} />
  );
};

export { PieChart };
