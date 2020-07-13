import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'components/Layout';
import { TagsSection } from './TagsSection';
import { NoteSection } from './NoteSection';
import { CategorySection } from 'components/CategorySection';
import { NumberPadSection } from './NumberPadSection';
import { Category } from 'types/pocket';
import { Tag } from 'types';
import { useRecords } from 'hooks/useRecords';
import { TopBar } from 'components/TopBar';
import { useHistory } from 'react-router-dom';

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
  const history = useHistory();
  const [selectedData, _setSelectedData] = useState(initialFormData);
  const { addRecord } = useRecords();
  const setSelectedData = (newValue: Partial<typeof selectedData>) => {
    _setSelectedData({
      ...selectedData,
      ...newValue
    });
  };
  const submit = async (callback: () => void) => {
    await addRecord(selectedData)
      .then(() => {
        window.alert('保存成功！');
        setSelectedData(initialFormData);
        callback();
      })
      .catch(error => {
        window.alert(error);
      });
  };
  return (
    <PocketLayout scrollTop={9999} showBottomBar={false}>
      <TopBar title="记一笔" goBack={() => history.replace('/bill')} />
      <TagsSection
        value={selectedData.selectedTags}
        onChange={selectedTags => setSelectedData({ selectedTags })}
      />
      <NoteSection
        value={selectedData.note}
        onChange={note => setSelectedData({ note })}
      />
      <CategorySection
        background={'#c4c4c4'}
        value={selectedData.selectedCategory}
        onChange={selectedCategory => setSelectedData({ selectedCategory })}
      />
      <NumberPadSection
        onChange={amount => setSelectedData({ amount })}
        onSave={async callback => {
          await submit(callback);
        }}
      />
    </PocketLayout>
  );
};

export default Pocket;
