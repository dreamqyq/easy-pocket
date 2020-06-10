import React from 'react';
import { useParams } from "react-router-dom"
import { useTags } from 'useTags';

type Params = {
  tagId: string
}
const TagDetail: React.FC = () => {
  const { tagId } = useParams<Params>();
  const { findTagNameById } = useTags();
  const tagName = findTagNameById(parseInt(tagId)).name
  return (
    <div>
      {tagName}
    </div>
  )
};

export default TagDetail;

