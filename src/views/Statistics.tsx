import React, { useState } from 'react';
import { Layout } from 'components/Layout';
import { CategorySection } from 'components/CategorySection';
import { Category } from 'types/pocket';
import styled from 'styled-components';
import { useRecords } from 'hooks/useRecords';
import day from 'dayjs';

const CategorySectionWrapper = styled.div`
  background: #fff;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`

const Statistics: React.FC = () => {
  const [category, setCategory] = useState<Category>('-');
  const { records } = useRecords();
  const selectedRecords = records.filter(record => record.selectedCategory === category)
  return (
    <Layout>
      <CategorySectionWrapper>
        <CategorySection
          value={category}
          onChange={(category) => { setCategory(category) }} />
      </CategorySectionWrapper>

      <div>
        {
          selectedRecords.map(record => (
            <Item key={record.createAt}>
              <div className="tags">{
                record.selectedTags.map(tag => (
                  <span key={tag.id}>{tag.name}</span>
                ))
              }</div>
              {
                record.note && <div className="note">{record.note}</div>
              }
              <div className="amount">￥{record.amount}</div>
              {/* <span>{day(record.createAt).format('YYYY年MM月DD日')}</span> */}
            </Item>
          ))
        }
      </div>
    </Layout>
  );
};

export default Statistics;
