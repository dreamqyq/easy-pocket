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
    const newRecord: RecordItemWithTime = {
      ...record,
      createAt: (new Date()).toISOString()
    };
    setRecords([...records, newRecord]);
  };

  return { records, setRecords, addRecord };
};

export { useRecords };
