import React, { useState } from 'react';
import { Wrapper } from './Wrapper';
import { calculateOutput } from './calculateOutput';
import { InputString } from 'types/pocket';
import { stringHasPlusOrMinus, stringNumber2Decimal, stringNumberLimitLength } from 'utils';

type Props = {
  onChange: (amount: number) => void;
  onSave?: (callback: () => void) => void;
};

const NumberPadSection: React.FC<Props> = props => {
  const [output, _setOutput] = useState<string>('0');
  const [expression, _setExpression] = useState('');
  const [isCalculate, setIsCalculate] = useState(false);

  const setOutput = (value: string) => {
    const newOutput = stringNumberLimitLength(value, 16);
    _setOutput(newOutput);
    props.onChange(parseFloat(newOutput));
  };

  const setExpression = (value: string) => {
    let newExpression = value;
    if (value.length > 20) {
      newExpression = value.slice(0, 25);
    }
    _setExpression(newExpression);
  };

  const editOutput = (event: React.MouseEvent) => {
    const text = (event.target as HTMLInputElement).textContent as InputString;
    if (text === null) return;
    if (text === '保存') {
      props.onSave &&
      props.onSave(() => {
        _setOutput('0');
      });
    } else if (text === '=') {
      setExpression('');
      setIsCalculate(false);
    } else {
      const outPutObj = calculateOutput(text, output, expression);
      const newExpression = outPutObj.expression;
      console.log(outPutObj);
      setExpression(newExpression);
      setIsCalculate(stringHasPlusOrMinus(newExpression));
      setOutput(outPutObj.output);
    }
  };

  return (
    <Wrapper>
      <div className="output">
        <p className={isCalculate ? 'result' : ''}>{stringNumber2Decimal(output)}</p>
        {isCalculate ? <p className="small">{expression}</p> : null}
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
        <button className="ok">{isCalculate ? '=' : '保存'}</button>
        <button>清空</button>
        <button>0</button>
        <button>.</button>
      </div>
    </Wrapper>
  );
};

export { NumberPadSection };
