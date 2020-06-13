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
  const findTagIndexById = (id: number): number => {
    let index = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  };
  const updateTag = (newTag: Tag): void => {
    const index = findTagIndexById(newTag.id);
    const tagsClone: Array<Tag> = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index, 1, newTag);
    setTags(tagsClone);
  };
  return { tags, setTags, findTagNameById, findTagIndexById, updateTag };
};

export { useTags };
