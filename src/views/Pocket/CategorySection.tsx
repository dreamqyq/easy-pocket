import styled from 'styled-components';

const CategorySection = styled.section`
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

export { CategorySection };
