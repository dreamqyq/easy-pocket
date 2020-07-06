import { RecordItemWithTime } from 'types/pocket';
import { createDate } from 'utils/createDate';

const defaultRecords = (): Array<RecordItemWithTime> => {
  return [{
    note: '买衣服',
    selectedTags: [{ id: 1, name: '衣' }],
    selectedCategory: '-',
    amount: 399,
    createAt: createDate(0).toISOString()
  }, {
    note: '吃大餐',
    selectedTags: [{ id: 2, name: '食' }],
    selectedCategory: '-',
    amount: 119,
    createAt: createDate(-1).toISOString()
  }, {
    note: '付房租',
    selectedTags: [{ id: 3, name: '住' }],
    selectedCategory: '-',
    amount: 1999,
    createAt: createDate(-2).toISOString()
  }, {
    note: '打车费',
    selectedTags: [{ id: 4, name: '行' }],
    selectedCategory: '-',
    amount: 49,
    createAt: createDate(-3).toISOString()
  }, {
    note: '卖旧物',
    selectedTags: [{ id: 1, name: '衣' }],
    selectedCategory: '+',
    amount: 89,
    createAt: createDate(-3).toISOString()
  }];
};

export { defaultRecords };
