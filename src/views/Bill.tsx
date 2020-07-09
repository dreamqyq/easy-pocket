import React, { ReactNode, useState } from 'react';
import { Layout } from 'components/Layout';
import { CategorySection } from 'components/CategorySection';
import { Category } from 'types/pocket';
import styled from 'styled-components';
import { useRecords } from 'hooks/useRecords';

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

const Bill: React.FC = () => {
  const [category, setCategory] = useState<Category>('-');
  const { filterRecordWithCategory, sortRecordByDate } = useRecords();
  const selectedRecords = filterRecordWithCategory(category);
  const dateAndRecordsSortByDate = sortRecordByDate(selectedRecords);

  return (
    <Layout>
      <CategorySection
        height={54}
        value={category}
        onChange={category => {
          setCategory(category);
        }}
      />
      {dateAndRecordsSortByDate.map(([date, records]) => (
        <div key={date}>
          <Header>{date}</Header>
          <div>
            {records.map(record => (
              <Item key={record.createAt}>
                <div className="tags oneLine">
                  {record.selectedTags
                    .map(tag => <span key={tag.id}>{tag.name}</span>)
                    .reduce(
                      (result, span, index, array) =>
                        result.concat(
                          index < array.length - 1 ? [span, '，'] : [span]
                        ),
                      [] as Array<ReactNode>
                    )}
                </div>
                {record.note && <div className="note">{record.note}</div>}
                <div className="amount">￥{record.amount}</div>
              </Item>
            ))}
          </div>
        </div>
      ))}
    </Layout>
  );
};

export default Bill;
