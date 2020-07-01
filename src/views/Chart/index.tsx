import React, { useState } from 'react';
import { Layout } from 'components/Layout';
import { PieChart } from 'components/PieChart';
import { EChartOption } from 'echarts';
import { piePatternImg } from './pieChartPattern';

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
const Chart: React.FC = () => {
  const [options] = useState<EChartOption>({
      title: {
        text: '饼图纹理',
        textStyle: {
          color: '#235894'
        }
      },
      tooltip: {},
      series: [{
        name: 'pie',
        type: 'pie',
        selectedMode: 'single',
        selectedOffset: 30,
        clockwise: true,
        label: {
          fontSize: 18,
          color: '#235894'
        },
        labelLine: {
          lineStyle: {
            color: '#235894'
          }
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' }
        ],
        itemStyle: itemStyle
      }]
    }
  );
  return (
    <Layout>
      <PieChart options={options} />
    </Layout>
  );
};

export default Chart;
