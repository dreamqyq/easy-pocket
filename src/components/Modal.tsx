import React from 'react';
import { Mask } from './Mask';
import styled from 'styled-components';
import { Button } from './Button';
import ReactDOM from 'react-dom';

const ModalBox = styled.div`
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #fff; 
  width: 80%;
  padding: 10px 20px;
  
  > header{
    font-size: 18px;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }
  > main {
    margin: 20px 0;
    input {
      width: 100%;
      padding: 5px 10px;
    }
  }
  > footer {
    text-align: right;
    button:first-child {
      margin-right: 10px; 
    } 
  }
`;

type ModalProps = {
  visible: boolean;
  onConfirm: (value: string) => void;
  onCancel: () => void;
  title?: string;
  placeholder?: string;
}
const Modal: React.FC<ModalProps> = props => {
  const inputRef = React.createRef<HTMLInputElement>();
  const handleConfirm = () => {
    props.onConfirm(inputRef.current!.value);
  };

  const element = (
    <>
      <Mask visible={props.visible} theme="black" />
      {props.visible && <ModalBox>
        <header>{props.title || '提示'}</header>
        <main>
          <input
            type="text"
            placeholder={props.placeholder || '请输入内容'}
            ref={inputRef}
          />
        </main>
        <footer>
          <Button onClick={() => props.onCancel()}>取消</Button>
          <Button onClick={handleConfirm}>确定</Button>
        </footer>
      </ModalBox>}
    </>
  );

  return ReactDOM.createPortal(element, document.body);
};

export { Modal };
