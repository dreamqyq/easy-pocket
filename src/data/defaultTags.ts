import { Tag } from 'types';
import { createId } from 'utils/createId';

const defaultTags: Array<Tag> = [
  { id: createId(), name: '衣' },
  { id: createId(), name: '食' },
  { id: createId(), name: '住' },
  { id: createId(), name: '行' }
];

export { defaultTags };

