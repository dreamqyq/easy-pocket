import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout } from 'components/Layout';
import { TagsSection } from './TagsSection';
import { NoteSection } from './NoteSection';
import { CategorySection } from './CategorySection';
import { NumberPadSection } from './NumberPadSection';
import { Category } from './pocket';
import { Tag } from 'types';

const PocketLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const Pocket: React.FC = () => {
  const [selectedData, _setSelectedData] = useState({
    selectedTags: [] as Tag[],
    note: '',
    selectedCategory: '-' as Category,
    amount: 0
  });
  const setSelectedData = (newValue: Partial<typeof selectedData>) => {
    _setSelectedData({
      ...selectedData,
      ...newValue
    });
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
        onChange={(amount => setSelectedData({ amount }))} />
    </PocketLayout>
  );
};

export default Pocket;
