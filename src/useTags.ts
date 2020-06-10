import { useState } from "react";
import { Tag } from "types";

const useTags = () => {
  const [tags, setTags] = useState<Array<Tag>>([
    { id: 1, name: '衣' },
    { id: 2, name: '食' },
    { id: 3, name: '住' },
    { id: 4, name: '行'
  }]);
  return { tags, setTags };
};

export { useTags };
