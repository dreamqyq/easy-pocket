import React from 'react';
import styled from 'styled-components';
import { Nav } from './Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  flex: 1;
  overflow: auto;
`;

type Props = {
  className?: string
}
const Layout: React.FC<Props> = (props) => {
  return (
    <Wrapper>
      <Main className={props.className}>
        {props.children}
      </Main>
      <Nav />
    </Wrapper>
  );
};

export { Layout };
