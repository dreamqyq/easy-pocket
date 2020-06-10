import { useState } from "react";
import { Tag } from "types";
import { createId } from "utils/createId";

const initialTags = [
    { id: createId(), name: '衣' },
    { id: createId(), name: '食' },
    { id: createId(), name: '住' },
    { id: createId(), name: '行'}
]

const useTags = () => {
  const [tags, setTags] = useState<Array<Tag>>(initialTags);
  return { tags, setTags };
};

export { useTags };
