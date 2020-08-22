import { Tag } from './index';

// readonly, cannot export and use it
const mathCharacter = ['+', '-'] as const;
/**
 * The reason for the [number] is that without it typeof mathCharacter
 * would return an array type. With the index signature typeof
 * mathCharacter[number] is saying "the type of any valid numeric index in mathCharacter,
 * so you get a type that is a union of the values instead of an array type.
 */
export type MathCharacter = typeof mathCharacter[number];

export type InputString =
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '.'
  | '='
  | '删除'
  | '清空'
  | '保存'
  | MathCharacter;
const categoryMap = { '-': '支出', '+': '收入' };
export type Category = keyof typeof categoryMap;

export type RecordItemWithTime = {
  selectedTags: Array<Tag>;
  note: string;
  selectedCategory: Category;
  amount: number;
  createAt: string; // ISO 8601
};

export type RecordItem = Omit<RecordItemWithTime, 'createAt'>;
export type RecordByTagInterface = { [K: string]: RecordItemWithTime[] };
