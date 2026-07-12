import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { MessageType } from 'types/message';
import { MessageColorMap } from 'data/messageColor';
import { createRoot } from 'react-dom/client';
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
  duration?: number;
  onClose: () => void;
} & MessageBoxProps

const MessageComponent: React.FC<Props> = props => {
  useEffect(() => {
    if (props.visible) {
      const timer = setTimeout(() => {
        props.onClose();
      }, props.duration || 2000);
      return () => clearTimeout(timer);
    }
  }, [props.visible, props.duration, props.onClose]);

  return ReactDOM.createPortal(
    <Fragment>
      <Mask visible={props.visible} />
      <MessageBox
        type={props.type}
        className={`content ${props.visible ? '' : 'hidden'}`}
      >
        {props.content}
      </MessageBox>
    </Fragment>,
    document.body
  );
};

const message = (type: MessageType, content: string) => {
  const div = document.createElement('div');
  document.body.append(div);
  const root = createRoot(div);

  const cleanup = () => {
    root.unmount();
    div.remove();
  };

  const App = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const showTimer = setTimeout(() => setVisible(true), 0);
      return () => clearTimeout(showTimer);
    }, []);

    const handleClose = () => {
      setVisible(false);
      // Give the hide animation time to play before cleanup
      setTimeout(cleanup, 300);
    };

    return (
      <MessageComponent
        content={content}
        type={type}
        visible={visible}
        onClose={handleClose}
        duration={2000}
      />
    );
  };

  root.render(<App />);
};

export { MessageComponent as Message, message };
