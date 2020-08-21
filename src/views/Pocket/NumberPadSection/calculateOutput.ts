import { InputString } from 'types/pocket';
import { characterHasPlusOrMinus } from 'utils';


const formatNumber = (text: InputString, originOutput: string): string => {
  if (originOutput === '0') {
    return text;
  } else {
    let result = originOutput + text;
    const dotIndex = result.indexOf('.');
    if (dotIndex >= 0) {
      result = result.slice(0, dotIndex + 3);
    }
    if (originOutput.slice(dotIndex + 1) === '00' && text !== '0') {
      result = result.slice(0, -1) + text;
    }
    return result;
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
  if (array.length === 1) {
    return originExpression + text;
  } else {
    const lastNumber = array[array.length - 1];
    array[array.length - 1] = formatNumber(text, lastNumber);
    return array.join('');
  }
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

type OutPutObj = {
  expression: string;
  output: string
}
const calculateOutput = (text: InputString, originOutput: string, originExpression: string): OutPutObj => {
  const result: OutPutObj = { expression: originExpression, output: originOutput };
  const length = originOutput.length;
  switch (true) {
    case !isNaN(parseInt(text)):
      if (originExpression) {
        result.expression = formatExpression(text, originExpression);
        result.output = calculateExpression(result.expression);
      } else {
        result.output = formatNumber(text, originOutput);
      }
      break;
    case text === '.':
      result.output = formatNumberWithDot(text, originOutput);
      if (originExpression) {
        const array = expressionSplitByLastCharacter(originExpression);
        array[array.length - 1] = formatNumberWithDot(text, array[array.length - 1]);
        result.expression = array.join('');
      }
      break;
    case characterHasPlusOrMinus(text):
      if (originExpression) {
        const originLastWord = originExpression.slice(-1);
        result.expression = characterHasPlusOrMinus(originLastWord) ? originExpression : originExpression + text;
        result.output = calculateExpression(result.expression);
      } else {
        result.expression = originOutput + text;
      }
      break;
    case text === '删除' && length > 1 && !parseFloat(originOutput):
      result.output = originOutput.slice(0, -1) || '';
      result.expression = originExpression.slice(0, -1) || '';
      break;
    case text === '清空':
    default:
      result.output = '';
      result.expression = '';
  }
  return result;
};

export { calculateOutput };
