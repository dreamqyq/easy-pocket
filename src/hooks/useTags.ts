import { useState } from 'react';
import { Tag } from 'types';
import { createId } from 'utils/createId';

const initialTags = [
  { id: createId(), name: '衣' },
  { id: createId(), name: '食' },
  { id: createId(), name: '住' },
  { id: createId(), name: '行' }
];

const useTags = () => {
  const [tags, setTags] = useState<Array<Tag>>(initialTags);
  const findTagNameById = (id: number): Tag => {
    return tags.filter(tag => tag.id === id)[0];
  };
  const updateTag = (newTag: Tag): void => {
    setTags(tags.map(tag => tag.id === newTag.id ? newTag : tag));
  };
  const deleteTag = (id: number): void => {
    setTags(tags.filter(tag => tag.id !== id));
  };
  return { tags, setTags, findTagNameById, updateTag, deleteTag };
};

export { useTags };
