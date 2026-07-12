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
  children?: ReactNode;
};
const Layout: React.FC<Props> = ({ className, showBottomBar = true, header, children }) => {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      {header ? <header>{header}</header> : null}
      <main ref={mainRef} className={className}>
        {children}
      </main>
      {showBottomBar ? <Nav /> : null}
    </Wrapper>
  );
};

export { Layout };
