import { useEffect, useState } from 'react';
import { RecordItem, RecordItemWithTime } from 'types/pocket';
import { useUpdate } from './useUpdate';

const useRecords = () => {
  const [records, setRecords] = useState<RecordItemWithTime[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
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
        createAt: (new Date()).toISOString()
      };
      setRecords([...records, newRecord]);
      resolve();
    })
  };

  return { records, setRecords, addRecord };
};

export { useRecords };
