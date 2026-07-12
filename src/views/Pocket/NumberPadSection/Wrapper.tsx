import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  > div.output {
    background: var(--color-bg-surface);
    font-size: 36px;
    height: 72px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 0 16px;
    p {
      &.result {
        font-size: 32px;
      }
      &.small {
        font-size: 24px;
      }
    }
  }
  > div.pad {
    > button {
      border: 1px solid var(--color-border);
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
