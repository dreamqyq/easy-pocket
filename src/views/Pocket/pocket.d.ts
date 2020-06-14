export type InputString = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.' | '删除' | '清空' | '保存';
const categoryMap = { '-': '支出', '+': '收入' };
export type Category = keyof typeof categoryMap;
