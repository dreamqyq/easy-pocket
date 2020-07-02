import { RecordItemWithTime } from 'types/pocket';
import { Tag } from 'types';

const defaultRecords = (findTagByName: (name: string) => Tag): Array<RecordItemWithTime> => {
  return [{
    note: '吃大餐',
    selectedTags: [],
    selectedCategory: '-',
    amount: 99,
    createAt: new Date().toISOString()
  }, {
    note: '吃大餐',
    selectedTags: [{ id: 1, name: '食' }],
    selectedCategory: '-',
    amount: 99,
    createAt: new Date().toISOString()
  }, {
    note: '吃大餐',
    selectedTags: [{ id: 1, name: '食' }],
    selectedCategory: '-',
    amount: 99,
    createAt: new Date().toISOString()
  }, {
    note: '吃大餐',
    selectedTags: [{ id: 1, name: '食' }],
    selectedCategory: '-',
    amount: 99,
    createAt: new Date().toISOString()
  }];
};

export { defaultRecords };
