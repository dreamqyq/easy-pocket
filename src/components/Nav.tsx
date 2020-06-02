import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
// require('icons/iconfont.js');

const NavWrap = styled.nav`
  >ul{
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
    display:flex;
    >li{
      width: 33.333%;
      text-align: center;
      padding: 15px 0;
      line-height: 26px;
    }
  }
`;

const Nav = () => {
  return (
    <NavWrap>
      <ul>
        <li>
          <svg
            className="icon"
            aria-hidden="true"
          >
            <use
              xlinkHref="#icon-zhifubao-gray"
            />
          </svg>
          <Link to="/tags" replace>标签</Link>
        </li>
        <li>
          <Link to="/pocket" replace>记账</Link>
        </li>
        <li>
          <Link to="/statistics" replace>统计</Link>
        </li>
      </ul>
    </NavWrap>
  );
};

export default Nav;
