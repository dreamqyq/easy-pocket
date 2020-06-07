import { NavLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';

const NavWrap = styled.nav`
  background: #f5f5f5;
  >ul{
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
    display:flex;
    >li{
      width: 33.333%;
      text-align: center;
      line-height: 26px;
      a{
        padding: 14px 0;
        display: inline-block;
        width: 100%;
        font-size: 20px;
        &.active{
          color: red;
          svg{
            fill: red;
          }
        }
      }
    }
  }
`;

const Nav: React.FC = () => {
  return (
    <NavWrap>
      <ul>
        <li>
          <NavLink to="/tags" exact replace activeClassName="active">
            <Icon name="tags" />
            &nbsp;标签
          </NavLink>
        </li>
        <li>
          <NavLink to="/pocket" exact replace activeClassName='active'>
            <Icon name="pocket" />
            &nbsp;记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" exact replace activeClassName='active'>
            <Icon name="statistics" />
            &nbsp;统计
          </NavLink>
        </li>
      </ul>
    </NavWrap>
  );
};

export default Nav;
