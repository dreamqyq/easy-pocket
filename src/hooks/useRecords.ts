import { useEffect, useState } from 'react';
import { RecordItem } from 'types/pocket';
import { useUpdate } from './useUpdate';

const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);

  useEffect(() => {
    setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('records', JSON.stringify(records));
  }, [records]);

  const addRecord = (record: RecordItem) => {
    setRecords([...records, record]);
  };

  return { records, setRecords, addRecord };
};

export { useRecords };
