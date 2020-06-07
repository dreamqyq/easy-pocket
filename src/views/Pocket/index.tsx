import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';
import { TagsSection } from './TagsSection';
import { NoteSection } from './NoteSection';
import { CategorySection } from './CategorySection';
import { NumberPadSection } from './NumberPadSection';

const PocketLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const Pocket = () => {
  return (
    <PocketLayout>
      <TagsSection />
      <NoteSection />
      <CategorySection />
      <NumberPadSection />
    </PocketLayout>
  );
};

export default Pocket;
