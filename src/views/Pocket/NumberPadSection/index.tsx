import React, { useState } from 'react';
import { Wrapper } from './Wrapper';
import { calculateOutput } from './calculateOutput';
import { InputString } from 'types/pocket';
import { mathCharacterArray } from 'data/mathCharacter';

type Props = {
  onChange: (amount: number) => void;
  onSave?: (callback: () => void) => void;
};

const NumberPadSection: React.FC<Props> = props => {
  const [output, _setOutput] = useState<string>('0');
  const [isCaculate, setIsCaculate] = useState(false);
  const setOutput = (value: string) => {
    const length = value.length;
    let newOutput: string;
    if (length > 13) {
      if (value.includes('.')) {
        newOutput = value.slice(0, 16);
      } else {
        newOutput = value.slice(0, 13);
      }
    } else if (length === 0) {
      newOutput = '0';
    } else {
      newOutput = value;
    }
    setIsCaculate(mathCharacterArray.some(value => newOutput.includes(value)));
    _setOutput(newOutput);
    props.onChange(parseFloat(newOutput));
  };
  const editOutput = (event: React.MouseEvent) => {
    const text = (event.target as HTMLInputElement).textContent as InputString;
    if (text === null) return;
    if (text === '保存') {
      props.onSave &&
        props.onSave(() => {
          _setOutput('0');
        });
    } else {
      setOutput(calculateOutput(text, output));
    }
  };
  return (
    <Wrapper>
      <div className="output">
        <p className={isCaculate ? 'result' : ''}>{output}</p>
        {isCaculate ? <p className="small">{output}</p> : null}
      </div>
      <div className="pad clearfix" onClick={editOutput}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button className="ok">{isCaculate ? '=' : '保存'}</button>
        <button>清空</button>
        <button>0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export { NumberPadSection };
