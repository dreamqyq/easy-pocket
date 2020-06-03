import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon'

const NavWrap = styled.nav`
  >ul{
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
    display:flex;
    >li{
      width: 33.333%;
      text-align: center;
      padding: 7px 0;
      line-height: 26px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrap>
      <ul>
        <li>
          <Icon name="tags" />
          <Link to="/tags" replace>标签</Link>
        </li>
        <li>
          <Icon name="pocket" />
          <Link to="/pocket" replace>记账</Link>
        </li>
        <li>
          <Icon name="statistics" /> 
          <Link to="/statistics" replace>统计</Link>
        </li>
      </ul>
    </NavWrap>
  );
};

export default Nav;
