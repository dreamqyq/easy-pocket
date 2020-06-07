import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import { TagsSection } from './TagsSection';
import { NoteSection } from './NoteSection';
import { CategorySection } from './CategorySection';
import { NumberPadSection } from './NumberPadSection';
import { Category } from './pocket';

const PocketLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const Pocket: React.FC = () => {
  const [selectedData, setSelectedData] = useState({
    selectedTags: [] as string[],
    note: '',
    selectedCategory: '-' as Category,
    amount: 0
  });
  return (
    <PocketLayout>
      {selectedData.selectedTags.join(',')}
      <hr />
      {selectedData.note}
      <hr />
      {selectedData.selectedCategory}
      <hr />
      {selectedData.amount}
      <TagsSection
        value={selectedData.selectedTags} onChange={(selectedTags) => {
        setSelectedData({
          ...selectedData,
          selectedTags
        });
      }} />
      <NoteSection
        value={selectedData.note}
        onChange={(note) => {
          setSelectedData({
            ...selectedData,
            note
          });
        }}
      />
      <CategorySection
        value={selectedData.selectedCategory}
        onChange={selectedCategory => {
          setSelectedData({
            ...selectedData,
            selectedCategory
          });
        }}
      />
      <NumberPadSection
        onChange={(amount) => {
          setSelectedData({
            ...selectedData,
            amount
          });
        }}
      />
    </PocketLayout>
  );
};

export default Pocket;
