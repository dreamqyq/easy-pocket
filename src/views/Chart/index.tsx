import React, { useState } from 'react';
import { Layout } from 'components/Layout';
import { PieChart } from 'components/PieChart';
import { CategorySection } from 'components/CategorySection';
import { Category } from 'types/pocket';
import { useRecords } from 'hooks/useRecords';

const Chart: React.FC = () => {
  const [category, setCategory] = useState<Category>('-');
  const { filterRecordByCategory, categorizeRecordByTags } = useRecords();
  const recordAmountByTags = categorizeRecordByTags(filterRecordByCategory(category)).countRecordAmountByTags;
  const data: Array<{ name: string; value: number }> = [];
  for (let tag in recordAmountByTags) {
    data.push({ name: tag, value: recordAmountByTags[tag] });
  }
  const categoryHeader = (
    <CategorySection
      height={54}
      value={category}
      onChange={category => {
        setCategory(category);
      }}
    />
  );

  return (
    <Layout header={categoryHeader}>
      <PieChart data={data} />
    </Layout>
  );
};

export default Chart;
