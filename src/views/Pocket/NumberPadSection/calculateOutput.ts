import { InputString } from 'types/pocket';
import { characterHasPlusOrMinus } from 'utils';

const stringNumber2Decimal = (stringNumber: string): string => {
  return parseFloat(stringNumber).toFixed(2);
};

const formatNumber = (text: InputString, originOutput: string): string => {
  if (originOutput === '0.00') {
    return stringNumber2Decimal(text);
  } else {
    const result = originOutput + text;
    const dotIndex = result.indexOf('.');
    if (dotIndex >= 0) {
      return result.slice(0, dotIndex + 3);
    }
    return stringNumber2Decimal(result);
  }
};

const expressionSplitByLastCharacter = (expression: string): Array<string> => {
  /**
   * "1+0.23-0.45+0.67-0.8" ==>
   * ["1+0.23-0.45+0.67", "-", "0.8"]
   */
  return expression.split(/([-|+](?=[^\-|+]+$))/g);
};

const formatExpression = (text: InputString, originExpression: string): string => {
  if (originExpression === '0.00') {
    return text;
  } else {
    const array = expressionSplitByLastCharacter(originExpression);
    if (array.length === 1) {
      return originExpression + text;
    } else {
      const lastNumber = array[array.length - 1];
      array[array.length - 1] = formatNumber(text, lastNumber);
      return array.join('');
    }
  }
};

const calculateExpression = (expression: string): string => {
  if (expression === '') return '0.00';
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
  return result.toFixed(2);
};

const formatNumberWithDot = (text: string, output: string): string => {
  return output.includes('.') ? output : output + text;
};

type OutPutObj = {
  expression: string;
  output: string
}
const calculateOutput = (text: InputString, originOutput: string, originExpression: string): OutPutObj => {
  debugger
  const result: OutPutObj = { expression: originExpression, output: originOutput };
  const length = originOutput.length;
  switch (true) {
    case !isNaN(parseInt(text)):
      result.output = formatNumber(text, originOutput);
      result.expression = formatExpression(text, originExpression);
      break;
    case text === '.':
      result.output = formatNumberWithDot(text, originOutput);
      const array = expressionSplitByLastCharacter(originExpression);
      array[array.length - 1] = formatNumberWithDot(text, array[array.length - 1]);
      result.expression = array.join('');
      break;
    case characterHasPlusOrMinus(text):
      const originLastWord = originExpression.slice(-1);
      result.expression = characterHasPlusOrMinus(originLastWord) ? originOutput : originOutput + text;
      result.output = calculateExpression(result.expression);
      break;
    case text === '删除' && length > 1:
      result.output = originOutput.slice(0, -1) || '';
      result.expression = originExpression.slice(0, -1) || '';
      break;
    case text === '清空':
    default:
      result.output = '';
      result.expression = result.output;
  }
  return result;
};

export { calculateOutput };
