import React, { useState } from 'react';
import { Layout } from 'components/Layout';
import { CategorySection } from 'components/CategorySection';
import { Category, RecordItemWithTime } from 'types/pocket';
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

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

const Statistics: React.FC = () => {
  const [category, setCategory] = useState<Category>('-');
  const { records } = useRecords();
  const selectedRecords = records.filter(record => record.selectedCategory === category);
  const recordsWithDateObj: { [K: string]: Array<RecordItemWithTime> } = {};
  selectedRecords.forEach(record => {
    const date = day(record.createAt).format('YYYY年MM月DD日');
    if (!(date in recordsWithDateObj)) {
      recordsWithDateObj[date] = [];
    }
    recordsWithDateObj[date].push(record);
  })
  const dateAndRecordsSortByDate = Object.entries(recordsWithDateObj).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] < b[0]) return 1;
    if (a[0] > b[0]) return -1;
    return 0;
  })

  return (
    <Layout>
      <CategorySectionWrapper>
        <CategorySection
          value={category}
          onChange={(category) => { setCategory(category) }} />
      </CategorySectionWrapper>
      {
        dateAndRecordsSortByDate.map(([date, records]) => (
          <div key={date}>
            <Header>{date}</Header>
            <div>
              {
                records.map(record => (
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
                  </Item>
                ))
              }
            </div>
          </div>
        ))
      }
    </Layout>
  );
};

export default Statistics;
