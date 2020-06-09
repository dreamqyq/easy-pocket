import {useState} from "react";

const useTags = () => {
  const [tags, setTags] = useState<Array<string>>(['衣', '食', '住', '行']);
  return { tags, setTags };
};

export { useTags };
