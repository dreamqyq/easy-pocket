import React, { useState } from 'react';
import { Layout } from 'components/Layout';
import { PieChart } from 'components/PieChart';
import { EChartOption } from 'echarts';
import { piePatternImg } from './pieChartPattern';
import { CategorySection } from 'components/CategorySection';
import { Category } from 'types/pocket';

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
  const [category, setCategory] = useState<Category>('-');
  const [options] = useState<EChartOption>({
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
        labelLine: {
          show: false
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
      <CategorySection
        value={category}
        onChange={category => {
          setCategory(category);
        }}
      />
      <PieChart options={options} />
    </Layout>
  );
};

export default Chart;
