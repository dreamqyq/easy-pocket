import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'components/Layout';
import { TagsSection } from './TagsSection';
import { NoteSection } from './NoteSection';
import { CategorySection } from './CategorySection';
import { NumberPadSection } from './NumberPadSection';
import { Category } from 'types/pocket';
import { Tag } from 'types';
import { useRecords } from '../../hooks/useRecords';

const PocketLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const initialFormData = {
  selectedTags: [] as Tag[],
  note: '',
  selectedCategory: '-' as Category,
  amount: 0
};

const Pocket: React.FC = () => {
  const [selectedData, _setSelectedData] = useState(initialFormData);
  const { addRecord } = useRecords();
  const setSelectedData = (newValue: Partial<typeof selectedData>) => {
    _setSelectedData({
      ...selectedData,
      ...newValue
    });
  };
  const submit = async () => {
    await addRecord(selectedData);
    window.alert('保存成功！');
    setSelectedData(initialFormData);
  };
  return (
    <PocketLayout>
      <TagsSection
        value={selectedData.selectedTags}
        onChange={(selectedTags => setSelectedData({ selectedTags }))} />
      <NoteSection
        value={selectedData.note}
        onChange={(note => setSelectedData({ note }))} />
      <CategorySection
        value={selectedData.selectedCategory}
        onChange={(selectedCategory => setSelectedData({ selectedCategory }))} />
      <NumberPadSection
        onChange={(amount) => setSelectedData({ amount })}
        onSave={submit}
      />
    </PocketLayout>
  );
};

export default Pocket;
