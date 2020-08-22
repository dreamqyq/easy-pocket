import React, { ReactNode, useRef } from 'react';
import styled from 'styled-components';
import { Nav } from './Nav';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  > main {
    flex: 1;
    overflow: auto;
  }
`;

type Props = {
  className?: string;
  showBottomBar?: boolean;
  header?: ReactNode;
};
const Layout: React.FC<Props> = props => {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      {props.header ? <header>{props.header}</header> : null}
      <main ref={mainRef} className={props.className}>
        {props.children}
      </main>
      {props.showBottomBar ? <Nav /> : null}
    </Wrapper>
  );
};

Layout.defaultProps = {
  showBottomBar: true
};

export { Layout };
