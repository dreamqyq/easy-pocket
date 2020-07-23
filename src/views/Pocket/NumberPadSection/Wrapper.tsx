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
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
      inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
  }
  > div.pad {
    > button {
      border: 1px solid #e4e4e4;
      font-size: 18px;
      width: 20%;
      height: 64px;
      float: left;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 40%;
      }
    }
  }
`;

export { Wrapper };
