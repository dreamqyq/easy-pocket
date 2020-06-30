import { NavLink, useHistory } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { Icon } from 'components/Icon';

const NavWrap = styled.nav`
  background: #f5f5f5;
  > ul {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    display: flex;
    > li {
      width: 33.333%;
      text-align: center;
      line-height: 26px;
      a {
        font-size: 26px;
        padding: 14px 0;
        display: inline-block;
        width: 100%;
        > .icon.plus{
          display: none;
        }
        > .icon.pocket{
          display: inline-block;
        }
        &.active {
          color: red;
          > .icon.plus {
            display: inline-block;
          }
          > .icon.pocket {
            display: none;
          }
          svg {
            fill: red;
          }
        }
      }
    }
  }
`;

const Nav: React.FC = () => {
  const history = useHistory();

  const toPocketPage = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.preventDefault();
    history.push('/pocket');
  };

  return (
    <NavWrap>
      <ul>
        <li>
          <NavLink to="/tags" replace activeClassName="active">
            <Icon name="tags"/>
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" replace activeClassName="active">
            <Icon name="plus"
                  className='plus'
                  onClick={(event) => toPocketPage(event)}
            />
            <Icon name="pocket" className='pocket'/>
          </NavLink>
        </li>
        <li>
          <NavLink to="/chart" replace activeClassName="active">
            <Icon name="statistics"/>
          </NavLink>
        </li>
      </ul>
    </NavWrap>
  );
};

export { Nav };
