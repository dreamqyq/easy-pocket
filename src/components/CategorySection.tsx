import styled from 'styled-components';
import React from 'react';
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
          background: var(--color-text);
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

const CategorySection: React.FC<Props> = ({ value, onChange, background = 'var(--color-bg-surface)', height = 72 }) => {
  const categoryMap = { '-': '支出', '+': '收入' };
  const categoryList: Array<Category> = ['-', '+'];
  return (
    <Wrapper background={background} height={height}>
      <ul>
        {categoryList.map(category => (
          <li
            key={category}
            className={category === value ? 'active' : ''}
            onClick={() => onChange(category)}
          >
            {categoryMap[category]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export { CategorySection };
