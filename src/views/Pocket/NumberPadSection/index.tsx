import React, { useState } from 'react';
import { Wrapper } from './Wrapper';
import { calculateOutput } from './calculateOutput';
import { InputString } from '../pocket';


type Props = {
  onChange: (amount: number) => void;
}

const NumberPadSection: React.FC<Props> = (props) => {
  const [output, _setOutput] = useState<string>('0');
  const setOutput = (value: string) => {
    const length = value.length;
    if (length > 16) {
      value = value.slice(0, 16);
    } else if (length === 0) {
      value = '0';
    }
    _setOutput(value);
  };
  const editOutput = (event: React.MouseEvent) => {
    const text = (event.target as HTMLInputElement).textContent;
    if (text === null) return;
    if (text === 'OK') {
      props.onChange(parseFloat(output));
    } else {
      setOutput(calculateOutput(text as InputString, output));
    }
  };
  return (
    <Wrapper>
      <div className='output'>{output}</div>
      <div className='pad clearfix' onClick={editOutput}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>OK</button>
        <button className='zero'>0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export { NumberPadSection };
