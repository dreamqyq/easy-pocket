import { useEffect, useState } from 'react';
import { Category, RecordByTagInterface, RecordItem, RecordItemWithTime } from 'types/pocket';
import { useUpdate } from './useUpdate';
import { defaultRecords } from 'data/defaultRecords';
import day from 'dayjs';

const useRecords = () => {
  const [records, setRecords] = useState<RecordItemWithTime[]>([]);

  useEffect(() => {
    const initialRecords = JSON.parse(window.localStorage.getItem('records') || '[]');
    if (initialRecords.length === 0) {
      setRecords(defaultRecords());
    } else {
      setRecords(initialRecords);
    }
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const addRecord = (record: RecordItem) => {
    return new Promise((resolve, reject) => {
      if (record.amount <= 0) {
        return reject('金额要大于 0 哦！');
      }
      if (record.selectedTags.length === 0) {
        return reject('至少要选择一个标签哦！');
      }
      const newRecord: RecordItemWithTime = {
        ...record,
        createAt: new Date().toISOString()
      };
      setRecords([...records, newRecord]);
      resolve();
    });
  };

  const filterRecordByCategory = (category: Category) => {
    return records.filter(record => record.selectedCategory === category);
  };

  const categorizeRecordByTags = (selectRecords: RecordItemWithTime[]) => {
    const recordWithTagName: RecordByTagInterface = {};
    const countRecordAmountByTags: { [TagName: string]: number } = {};
    selectRecords.forEach(record => {
      record.selectedTags.forEach(tag => {
        if (!(tag.name in recordWithTagName)) {
          recordWithTagName[tag.name] = [];
          countRecordAmountByTags[tag.name] = 0;
        }
        recordWithTagName[tag.name].push(record);
        countRecordAmountByTags[tag.name] += record.amount;
      });
    });
    return { recordWithTagName, countRecordAmountByTags };
  };

  const sortRecordByDate = (selectedRecords: RecordItemWithTime[]) => {
    const recordsWithDateObj: { [K: string]: Array<RecordItemWithTime> } = {};
    selectedRecords.forEach(record => {
      const date = day(record.createAt).format('YYYY年MM月DD日');
      if (!(date in recordsWithDateObj)) {
        recordsWithDateObj[date] = [];
      }
      recordsWithDateObj[date].push(record);
    });
    return Object.entries(recordsWithDateObj).sort(
      (a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] < b[0]) return 1;
        if (a[0] > b[0]) return -1;
        return 0;
      }
    );
  };

  return { addRecord, categorizeRecordByTags, filterRecordByCategory, sortRecordByDate };
};

export { useRecords };
