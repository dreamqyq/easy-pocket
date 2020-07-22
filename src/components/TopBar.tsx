import styled from 'styled-components';
import React from 'react';
import { Icon } from './Icon';
import { useHistory } from 'react-router-dom';

const TopBarWrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #fff;
  margin-bottom: 8px;
`;

type Props = {
  title: string;
  goBack?: () => void;
}
const TopBar: React.FC<Props> = (props) => {
  const history = useHistory();
  const clickHandle = () => {
    props.goBack ? props.goBack() : history.goBack();
  };

  return (
    <TopBarWrap>
      <Icon name="left" onClick={clickHandle} />
      <span>{props.title}</span>
      <Icon />
    </TopBarWrap>
  );
};

export { TopBar };
