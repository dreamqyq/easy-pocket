import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { MessageType } from 'types/message';
import { MessageColorMap } from 'data/messageColor';
import ReactDOM from 'react-dom';
import { Mask } from './Mask';

interface MessageBoxProps {
  type: MessageType
}

const MessageBox = styled.div<MessageBoxProps>`
  position: fixed;
  z-index: 2;
  top: 20px;
  left: 0;
  width: 90vw;
  margin-left: 5vw; 
  box-shadow: 0 0 8px 0 rgba(0,0,0,0.5);
  padding: 10px 20px;
  opacity: 1;
  transition: all 0.3s;
  background: ${props => MessageColorMap[props.type].backgroundColor};
  color: ${props => MessageColorMap[props.type].textColor};
  border-color: ${props => MessageColorMap[props.type].borderColor};
  
  &.hidden {
   transform: translateY(-100%); 
   opacity: 0;
  }
`;


type Props = {
  content: string;
  visible: boolean;
  onClose: () => void;
} & MessageBoxProps

const Message: React.FC<Props> = props => {
  useEffect(() => {
    if (props.visible) {
      setTimeout(() => {
        props.onClose();
      }, 2000);
    }
  }, [props.visible]);

  const element = (
    <Fragment>
      <Mask visible={props.visible} />
      <MessageBox
        type={props.type}
        className={`content ${props.visible ? '' : 'hidden'}`}
      >
        {props.content}
      </MessageBox>
    </Fragment>
  );
  return ReactDOM.createPortal(element, document.body);
};


const message = (type: MessageType, content: string) => {
  const handleClose = () => {
    ReactDOM.render(React.cloneElement(messageComponent, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  const messageComponent = <Message content={content} type={type} visible={true} onClose={() => handleClose()} />;
  const div = document.createElement('div');
  document.body.append(div);
  ReactDOM.render(messageComponent, div);
};


export { Message, message };
