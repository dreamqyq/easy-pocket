import { InputString, MathCharacter } from 'types/pocket';
import { mathCharacterArray } from 'data/mathCharacter';

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

const calculateOutput = (text: InputString, originOutput: string): string => {
  switch (true) {
    case !isNaN(parseInt(text)):
      return formatNumber(text, originOutput);
    case text === '.':
      if (originOutput.includes('.')) {
        return originOutput;
      } else {
        return originOutput + text;
      }
    case mathCharacterArray.includes(text as MathCharacter):
      console.log(text);
      return originOutput;
    case text === '删除': {
      const length = originOutput.length;
      if (length > 1) {
        return originOutput.slice(0, -1) || '';
      } else if (length === 1) {
        return '';
      }
      return '';
    }
    case text === '清空':
      return '';
    default:
      return '';
  }
};

export { calculateOutput };
