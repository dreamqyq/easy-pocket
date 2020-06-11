import React from 'react';
import { useParams } from 'react-router-dom';
import { useTags } from 'hooks/useTags';
import Layout from 'components/Layout';

type Params = {
  tagId: string
}
const TagDetail: React.FC = () => {
  const { tagId } = useParams<Params>();
  const { findTagNameById } = useTags();
  const tagName = findTagNameById(parseInt(tagId)).name
  return (
    <Layout>
        {tagName}
    </Layout>  
  )
};

export default TagDetail;

