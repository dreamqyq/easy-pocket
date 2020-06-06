import styled from 'styled-components';
import React, { useState } from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  line-height: 72px;
  > ul{
    display: flex;
    background: #c4c4c4;
    > li{
      width: 50%; 
      text-align: center;
      &.active{
        position: relative;
        &::after{
          content: '';
          height: 3px;
          width: 100%;
          background: #333;
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
        }
      }
    }
  } 
`;

const CategorySection: React.FC = () => {
  const categoryMap = { '-': '支出', '+': '收入' };
  type Category = keyof typeof categoryMap;
  const [currentCategory, setCurrentCategory] = useState<Category>('-');
  const [categoryList] = useState<Array<Category>>(['-', '+']);
  return (
    <Wrapper>
      <ul>
        {
          categoryList.map(category => (
            <li key={category}
                className={category === currentCategory ? 'active' : ''}
                onClick={() => setCurrentCategory(category)}
            >
              {categoryMap[category]}</li>
          ))
        }
      </ul>
    </Wrapper>
  );
};

export { CategorySection };
