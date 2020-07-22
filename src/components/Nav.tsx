import { NavLink, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'components/Icon';

const NavWrap = styled.nav`
  background: #f5f5f5;
  > ul {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    display: flex;
    > li {
      width: 33.333%;
      line-height: 26px;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 26px;
        padding: 5px 0;
        width: 100%;
        height: 100%;
        > span {
          font-size: 14px; 
        }
        > .icon.plus {
          display: none;
        }
        > .icon.pocket {
          display: inline-block;
        }
        > span.pocket {
          display: inline-block;
        }
        > span.record {
          display: none;
        }
        &.active {
          color: #f60;
          > span.pocket {
            display: none;
          }
          > span.record {
            display: inline-block;
          }
          > .icon.plus {
            display: inline-block;
          }
          > .icon.pocket {
            display: none;
          }
          svg {
            fill: #f60;
          }
        }
      }
    }
  }
`;

const Nav: React.FC = () => {
  const currentLocation = useLocation();
  const [middleNavTo, setMiddleNavTo] = useState('/bill');

  useEffect(() => {
    if (currentLocation.pathname === '/bill') {
      setMiddleNavTo('/pocket');
    }
  }, [currentLocation]);

  return (
    <NavWrap>
      <ul>
        <li>
          <NavLink to="/tags" replace activeClassName="active">
            <Icon name="tags" />
            <span>标签</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={middleNavTo} replace activeClassName="active" isActive={(match, location) => {
            return location.pathname === '/bill' || location.pathname === '/pocket';
          }}>
            <Icon name="plus" className='plus' />
            <Icon name="pocket" className='pocket' />
            <span className='pocket'>账单</span>
            <span className='record'>记一笔</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/chart" replace activeClassName="active">
            <Icon name="chart" />
            <span>报表</span>
          </NavLink>
        </li>
      </ul>
    </NavWrap>
  );
};

export { Nav };
