import React, { useEffect } from 'react';
import styled from 'styled-components';
import { MessageType } from 'types/message';
import { MessageColorMap } from 'data/messageColor';

interface WrapperProps {
  type: MessageType
}

const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  z-index: 9999;
  background: ${props => MessageColorMap[props.type].backgroundColor};
  color: ${props => MessageColorMap[props.type].textColor};
  border-color: ${props => MessageColorMap[props.type].borderColor};
  top: 20px;
  left: 0;
  width: 90%;
  margin-left: 5%; 
  box-shadow: 0 0 8px 0 rgba(0,0,0,0.5);
  padding: 10px 20px;
  opacity: 1;
  transition: all 0.3s;
  
  &.hidden {
   transform: translateY(-100%); 
   opacity: 0;
  }
`;

type Props = {
  message: string;
  visible: boolean;
  onChange: (visible: boolean) => void;
} & WrapperProps

const Message: React.FC<Props> = props => {
  useEffect(() => {
    if (props.visible) {
      setTimeout(() => {
        props.onChange(false);
      }, 2000);
    }
  }, [props.visible]);

  return (
    <Wrapper className={props.visible ? '' : 'hidden'} type={props.type}>
      {props.message}
    </Wrapper>
  );
};

export { Message };
