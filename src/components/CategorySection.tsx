import styled from 'styled-components';
import React, { useState } from 'react';
import { Category } from 'types/pocket';

type WrapProps = {
  background: string;
  height: number;
}
const Wrapper = styled.section<WrapProps>`
  background: ${props => props.background};
  font-size: 24px;
  line-height: ${props => props.height}px;
  > ul {
    display: flex;
    > li {
      width: 50%;
      text-align: center;
      &.active {
        position: relative;
        &::after {
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

type Props = {
  value: Category;
  onChange: (selectedCategory: Category) => void;
  background?: string;
  height?: number;
};

const CategorySection: React.FC<Props> = props => {
  const categoryMap = { '-': '支出', '+': '收入' };
  const currentCategory = props.value;
  const [categoryList] = useState<Array<Category>>(['-', '+']);
  return (
    <Wrapper background={props.background!} height={props.height!}>
      <ul>
        {categoryList.map(category => (
          <li
            key={category}
            className={category === currentCategory ? 'active' : ''}
            onClick={() => props.onChange(category)}
          >
            {categoryMap[category]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

CategorySection.defaultProps = {
  background: '#fff',
  height: 72
};

export { CategorySection };
