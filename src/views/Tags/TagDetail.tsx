import React from 'react';
import { useParams } from "react-router-dom"

type Params = {
  tagName: string
}
const TagDetail: React.FC = () => {
  const { tagName } = useParams<Params>();
  return (
    <div>
      {tagName}
    </div>
  )
};

export default TagDetail;

