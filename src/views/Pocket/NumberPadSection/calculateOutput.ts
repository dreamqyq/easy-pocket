import { InputString } from 'types/pocket';

const calculateOutput = (text: InputString, originOutput: string): string => {
  switch (true) {
    case (!isNaN(parseInt(text))):
      if (originOutput === '0') {
        return text;
      } else {
        return originOutput + text;
      }
    case text === '.':
      if (originOutput.includes('.')) {
        return originOutput;
      } else {
        return originOutput + text;
      }
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
