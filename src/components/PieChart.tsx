import React, { useEffect, useRef } from 'react';
import { init, use } from 'echarts/core';
import { PieChart as PieChartType } from 'echarts/charts';
import { TitleComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { piePatternImg } from '../views/Chart/pieChartPattern';

// Register ECharts modules for tree-shaking (only bundle what's needed)
use([TitleComponent, TooltipComponent, PieChartType, CanvasRenderer]);

type Props = {
  data: Array<{
    name: string;
    value: number;
  }>
}

// ECharts 5 flattened itemStyle (no more `normal` wrapper)
const itemStyle = {
  opacity: 0.7,
  color: {
    image: piePatternImg,
    repeat: 'repeat'
  },
  borderWidth: 3,
  borderColor: '#235894'
};

const PieChart: React.FC<Props> = (props) => {
  const { data } = props;
  const containerRef = useRef<HTMLDivElement>(null!);
  const chartRef = useRef<ReturnType<typeof init>>();

  // Init chart once
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const width = Math.min(document.documentElement.clientWidth, 500);
    el.style.width = `${width - 20}px`;
    el.style.height = `${(width - 20) * 1.2}px`;

    const instance = init(el, 'light');
    chartRef.current = instance;

    instance.setOption({
      title: {
        text: '账单统计',
        top: 20,
        left: 20,
        textStyle: { color: '#235894' }
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
          color: '#1a426d',
          position: 'inside'
        },
        data: [],
        labelLine: { show: false },
        itemStyle
      }]
    });

    return () => { instance.dispose(); };
  }, []);

  // Update data
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
