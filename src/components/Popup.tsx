import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid red;
`;

type Props = {
  show: boolean
}
const Popup: React.FC<Props> = (props) => {
  return <Wrapper>
    {props.children}
  </Wrapper>;
};

export { Popup };
