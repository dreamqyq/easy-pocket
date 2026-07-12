import React, { useEffect, useRef } from 'react';
import { init, use } from 'echarts/core';
import { PieChart as PieChartType } from 'echarts/charts';
import { TitleComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { piePatternImg } from '../views/Chart/pieChartPattern';

use([TitleComponent, TooltipComponent, PieChartType, CanvasRenderer]);

type Props = {
  data: Array<{
    name: string;
    value: number;
  }>
};

const getCSSColor = (name: string, fallback: string) => {
  const style = getComputedStyle(document.documentElement);
  const value = style.getPropertyValue(name).trim();
  return value || fallback;
};

const PieChart: React.FC<Props> = (props) => {
  const { data } = props;
  const containerRef = useRef<HTMLDivElement>(null!);
  const chartRef = useRef<ReturnType<typeof init>>();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const width = Math.min(document.documentElement.clientWidth, 500);
    el.style.width = `${width - 20}px`;
    el.style.height = `${(width - 20) * 1.2}px`;

    const textColor = getCSSColor('--color-text', '#333');
    const textSecondary = getCSSColor('--color-text-secondary', '#1a426d');

    const instance = init(el);
    chartRef.current = instance;

    instance.setOption({
      title: {
        text: '账单统计',
        top: 20,
        left: 20,
        textStyle: { color: textColor }
      },
      tooltip: { show: true },
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
        data: [],
        labelLine: { show: false },
        itemStyle: {
          opacity: 0.7,
          color: {
            image: piePatternImg,
            repeat: 'repeat'
          },
          borderWidth: 3,
          borderColor: textColor
        }
      }]
    });

    return () => { instance.dispose(); };
  }, []);

  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return;
    chart.setOption({ series: [{ data }] });
  }, [data]);

  return (
    <div ref={containerRef} />
  );
};

export { PieChart };
