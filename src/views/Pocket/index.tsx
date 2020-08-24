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
import { Popup } from 'components/Popup';
import { message } from 'components/Message';

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
  const [userInputSectionShow, setUserInputSectionShow] = useState(true);
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
        message('success', '保存成功！');
        setSelectedData(initialFormData);
        callback();
      })
      .catch(error => {
        message('error', error);
      });
  };

  return (
    <PocketLayout showBottomBar={false}>
      <TopBar title="记一笔" goBack={() => history.replace('/bill')} />
      <TagsSection
        value={selectedData.selectedTags}
        onChange={selectedTags => setSelectedData({ selectedTags })}
        onClick={() => setUserInputSectionShow(!userInputSectionShow)}
      />
      <Popup show={userInputSectionShow}>
        <NoteSection
          value={selectedData.note}
          onChange={note => setSelectedData({ note })}
        />
        <CategorySection
          background={'#e4e4e4'}
          value={selectedData.selectedCategory}
          onChange={selectedCategory => setSelectedData({ selectedCategory })}
        />
        <NumberPadSection
          onChange={amount => setSelectedData({ amount })}
          onSave={async callback => {
            await submit(callback);
          }}
        />
      </Popup>
    </PocketLayout>
  );
};

export default Pocket;
