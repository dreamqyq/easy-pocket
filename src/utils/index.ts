import { mathCharacterArray } from 'data/mathCharacter';
import { MathCharacter } from 'types/pocket';

const characterHasPlusOrMinus = (character: string): boolean => {
  return mathCharacterArray.includes(character as MathCharacter);
};

const stringHasPlusOrMinus = (string: string): boolean => {
  return mathCharacterArray.some(value => string.includes(value));
};

const stringNumber2Decimal = (stringNumber: string): string => {
  return parseFloat(stringNumber).toFixed(2);
};

const stringNumberLimitLength = (stringNumber: string, limit: number): string => {
  const length = stringNumber.length;
  let result: string;
  if (length > 13) {
    if (stringNumber.includes('.')) {
      result = stringNumber.slice(0, limit);
    } else {
      result = stringNumber.slice(0, limit - 3);
    }
  } else if (length === 0) {
    result = '0';
  } else {
    result = stringNumber;
  }
  return result;
};

export {
  characterHasPlusOrMinus,
  stringHasPlusOrMinus,
  stringNumber2Decimal,
  stringNumberLimitLength
};
