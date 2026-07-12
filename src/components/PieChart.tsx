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
    borderColor: '#333'
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
          color: '#333'
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

  const getCSSColor = (name: string, fallback: string) => {
    const style = getComputedStyle(document.documentElement);
    const value = style.getPropertyValue(name).trim();
    return value || fallback;
  };

  useEffect(() => {
    const width = document.documentElement.clientWidth <= 500 ? document.documentElement.clientWidth : 500;
    container.current.style.width = `${width - 20}px`;
    container.current.style.height = `${(width - 20) * 1.2}px`;
    chart.current = init(container.current, 'light');
  }, []);

  useEffect(() => {
    const textColor = getCSSColor('--color-text', '#333');
    const textSecondary = getCSSColor('--color-text-secondary', '#1a426d');
    setOptions(prev => ({
      ...prev,
      title: {
        ...(prev as any).title,
        textStyle: {
          color: textColor
        }
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
          color: textSecondary,
          position: 'inside'
        },
        data,
        labelLine: {
          show: false
        },
        itemStyle: {
          normal: {
            opacity: 0.7,
            color: {
              image: piePatternImg,
              repeat: 'repeat'
            },
            borderWidth: 3,
            borderColor: textColor
          }
        }
      }]
    }));
  }, [data]);

  useEffect(() => {
    chart.current.setOption(options);
  }, [options]);

  return (
    <div ref={container} />
  );
};

export { PieChart };
