import React, { useState } from 'react';
import { Layout } from 'components/Layout';
import { PieChart } from 'components/PieChart';
import { CategorySection } from 'components/CategorySection';
import { Category } from 'types/pocket';
import { useRecords } from 'hooks/useRecords';
import day from 'dayjs';

const Chart: React.FC = () => {
  const [category, setCategory] = useState<Category>('-');
  const { filterRecordWithCategory } = useRecords();
  const data = filterRecordWithCategory(category)
    .map(record => (
      { value: record.amount, name: day(record.createAt).format('YYYY年MM月DD日') }
    ));
  return (
    <Layout>
      <CategorySection
        height={54}
        value={category}
        onChange={category => {
          setCategory(category);
        }}
      />
      <PieChart data={data} />
    </Layout>
  );
};

export default Chart;
