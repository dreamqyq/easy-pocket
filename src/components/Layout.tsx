import React, { useRef, useEffect } from 'react';
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
  className?: string;
  scrollTop?: number;
  showBottomBar?: boolean;
};
const Layout: React.FC<Props> = props => {
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setTimeout(() => {
      if (!mainRef.current) return;
      mainRef.current.scrollTop = props.scrollTop!;
    }, 0);
  }, [props.scrollTop]);
  return (
    <Wrapper>
      <Main ref={mainRef} className={props.className}>
        {props.children}
      </Main>
      {props.showBottomBar ? <Nav /> : null}
    </Wrapper>
  );
};

Layout.defaultProps = {
  scrollTop: 0,
  showBottomBar: true
};

export { Layout };
