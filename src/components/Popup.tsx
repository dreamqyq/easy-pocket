import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100vw;
  max-width: 500px;
  transition: all 0.3s;
  opacity: 0;
  transform: translateY(100%);
  &.active {
    transform: translateY(0);
    opacity: 1;
  }
`;

type Props = {
  show: boolean;
};
const Popup: React.FC<Props> = props => {
  return (
    <Wrapper className={props.show ? 'active' : ''}>{props.children}</Wrapper>
  );
};

export { Popup };
