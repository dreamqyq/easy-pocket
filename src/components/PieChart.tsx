import React, { useEffect, useRef } from 'react';
import { EChartOption, ECharts, init } from 'echarts';

type Props = {
  options: EChartOption
}
const PieChart: React.FC<Props> = (props) => {
  const { options } = props;
  const container = useRef({} as HTMLDivElement);
  const chart = useRef({} as ECharts);

  useEffect(() => {
    const width = document.documentElement.clientWidth;
    container.current.style.width = `${width - 20}px`;
    container.current.style.height = `${(width - 20) * 1.2}px`;
    chart.current = init(container.current, 'light');
  }, []);

  useEffect(() => {
    console.log(options, chart.current);
    chart.current.setOption(options);
  }, [options]);

  return (
    <div ref={container} />
  );
};

export { PieChart };