import { InputString } from 'types/pocket';
import { characterHasPlusOrMinus, stringNumberLimitLength } from 'utils';

type OutPutObj = {
  expression: string;
  output: string
}

const formatNumber = (text: InputString, originOutput: string): string => {
  if (originOutput === '0') {
    return text;
  } else {
    let result = originOutput + text;
    const dotIndex = result.indexOf('.');
    if (dotIndex >= 0) {
      result = result.slice(0, dotIndex + 3);
      if (originOutput.slice(dotIndex + 1) === '00' && text !== '0') {
        result = result.slice(0, -1) + text;
      }
    }
    return stringNumberLimitLength(result, 16);
  }
};

const expressionSplitByLastCharacter = (expression: string): Array<string> => {
  /** example
   * "1+0.23-0.45+0.67-0.8" ==>
   * ["1+0.23-0.45+0.67", "-", "0.8"]
   */
  return expression.split(/([-|+](?=[^\-|+]+$))/g);
};

const formatExpression = (text: InputString, originExpression: string): string => {
  const array = expressionSplitByLastCharacter(originExpression);
  let result: string;
  if (array.length === 1) {
    result = originExpression + text;
  } else {
    const lastNumber = array[array.length - 1];
    array[array.length - 1] = formatNumber(text, lastNumber);
    result = array.join('');
  }
  return result.slice(0, 25);
};

const calculateExpression = (expression: string): string => {
  if (expression === '') return '0';
  const array = expression.split(/([+|-])/g);
  let result = parseFloat(array[0]);
  array.forEach((item, index) => {
    const nextNumber = parseFloat(array[index + 1]) || 0;
    if (item === '+') {
      result += nextNumber;
    } else if (item === '-') {
      result -= nextNumber;
    }
  });
  return result.toString();
};

const formatNumberWithDot = (text: string, originOutput: string): string => {
  return originOutput.includes('.') ? originOutput : originOutput + text;
};

const handleInputNumber = (text: InputString, originOutput: string, originExpression: string): OutPutObj => {
  const result: OutPutObj = {
    output: originOutput,
    expression: originExpression
  };
  if (originExpression) {
    result.expression = formatExpression(text, originExpression);
    result.output = calculateExpression(result.expression);
  } else {
    result.output = formatNumber(text, originOutput);
  }
  return result;
};

const handleInputDot = (text: InputString, originOutput: string, originExpression: string): OutPutObj => {
  const result: OutPutObj = {
    output: originOutput,
    expression: originExpression
  };
  result.output = formatNumberWithDot(text, originOutput);
  if (originExpression) {
    const array = expressionSplitByLastCharacter(originExpression);
    array[array.length - 1] = formatNumberWithDot(text, array[array.length - 1]);
    result.expression = array.join('');
  }
  return result;
};

const handleInputCharacter = (text: InputString, originOutput: string, originExpression: string): OutPutObj => {
  const result: OutPutObj = {
    output: originOutput,
    expression: originExpression
  };
  if (originExpression) {
    const originLastWord = originExpression.slice(-1);
    result.expression = characterHasPlusOrMinus(originLastWord) ? originExpression : originExpression + text;
    result.output = calculateExpression(result.expression);
  } else {
    if (originOutput === '0' && text === '+') {
      result.expression = '';
    } else {
      result.expression = originOutput + text;
    }
  }
  return result;
};

const handleDelete = (text: InputString, originOutput: string, originExpression: string): OutPutObj => {
  const result: OutPutObj = {
    output: originOutput,
    expression: originExpression
  };
  if (originExpression) {
    result.expression = originExpression.slice(0, -1) || '';
    result.output = calculateExpression(result.expression);
  } else {
    if (originOutput.slice(-2, -1) === '.') {
      result.output = originOutput.slice(0, -2) || '';
    } else {
      result.output = originOutput.slice(0, -1) || '';
    }
  }
  return result;
};

const calculateOutput = (text: InputString, originOutput: string, originExpression: string): OutPutObj => {
  switch (true) {
    case !isNaN(parseInt(text)):
      return handleInputNumber(text, originOutput, originExpression);
    case text === '.':
      return handleInputDot(text, originOutput, originExpression);
    case characterHasPlusOrMinus(text):
      return handleInputCharacter(text, originOutput, originExpression);
    case text === '删除' && originOutput.length > 1 && !!parseFloat(originOutput):
      return handleDelete(text, originOutput, originExpression);
    default:
      return { output: '', expression: '' };
  }
};

export { calculateOutput };
