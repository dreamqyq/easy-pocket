import React, { useState } from 'react';
import { Layout } from 'components/Layout';
import { CategorySection } from 'components/CategorySection';
import { Category } from 'types/pocket';
import styled from 'styled-components';

const CategorySectionWrapper = styled.div`
  background: #fff;
`

const Statistics: React.FC = () => {
  const [category, setCategory] = useState<Category>('-');
  return (
    <Layout>
      <CategorySectionWrapper>
        <CategorySection
          value={category}
          onChange={(category) => { setCategory(category) }} />
      </CategorySectionWrapper>
    </Layout>
  );
};

export default Statistics;
