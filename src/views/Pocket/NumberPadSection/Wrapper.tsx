import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > div.output {
    background: #fff;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
  }
  > div.pad {
    > button {
      border: 1px solid #e4e4e4;
      font-size: 18px;
      width: 25%;
      height: 64px;
      float: left;
      &.ok {
        float: right;
      }
    }
  }
`;

export { Wrapper };
