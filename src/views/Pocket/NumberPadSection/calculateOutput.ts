import { InputString } from 'types/pocket';
import { characterHasPlusOrMinus } from 'utils';

const formatNumber = (text: InputString, originOutput: string): string => {
  if (originOutput === '0') {
    return text;
  } else {
    const result = originOutput + text;
    const dotIndex = result.indexOf('.');
    if (dotIndex >= 0) {
      return result.slice(0, dotIndex + 3);
    }
    return result;
  }
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
      result.output = formatNumber(text, originOutput);
      break;
    case text === '.':
      result.output = originOutput.includes('.') ? originOutput : originOutput + text;
      break;
    case characterHasPlusOrMinus(text):
      const originLastWord = originOutput.slice(-1);
      result.expression = characterHasPlusOrMinus(originLastWord) ? originOutput : originOutput + text;
      break;
    case text === '删除' && length > 1:
      result.output = originOutput.slice(0, -1) || '';
      break;
    case text === '清空':
    default:
      result.output = '';
      result.expression = result.output;
  }
  return result;
};

export { calculateOutput };
