import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

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
          <Link to="/tags">标签</Link>
        </li>
        <li>
          <Link to="/pocket">记账</Link>
        </li>
        <li>
          <Link to="/statistics">统计</Link>
        </li>
      </ul>
    </NavWrap>
  );
};

export default Nav;
