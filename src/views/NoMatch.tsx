import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100vh;
  text-align: center;
  padding: 30px;
  > p {
    margin: 16px;  
  }
  a {
    color: blue;
    text-decoration: underline;
  }
`;

const NoMatch: React.FC = () => {
  return <Wrapper>
    <p> 404 </p>
    <p> Page is Not Found </p>
    <Link to="/">Visit homepage -></Link>
  </Wrapper>;
};

export default NoMatch;
