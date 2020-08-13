import { mathCharacterArray } from 'data/mathCharacter';
import { MathCharacter } from 'types/pocket';

const characterHasPlusOrMinus = (character: string): boolean => {
  return mathCharacterArray.includes(character as MathCharacter);
};

const stringHasPlusOrMinus = (string: string): boolean => {
  return mathCharacterArray.some(value => string.includes(value));
};

export { characterHasPlusOrMinus, stringHasPlusOrMinus };
