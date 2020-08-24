import { useLayoutEffect, useState } from 'react';
import { Tag } from 'types';
import { createId } from 'utils/createId';
import { useUpdate } from './useUpdate';
import { defaultTags } from 'data/defaultTags';
import { message } from 'components/Message';

const useTags = () => {
  const [tags, setTags] = useState<Array<Tag>>([]);

  useLayoutEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = defaultTags;
    }
    setTags(localTags);
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);

  const addTag = () => {
    const newTagName = window.prompt('请输入新标签的名字');
    if (newTagName === null || newTagName === '') return;
    if (isTagsHasCurrentTag(newTagName, tags)) {
      message('warning', '该标签名已存在，请不要重复添加！');
    } else {
      setTags([
        ...tags,
        {
          id: createId(),
          name: newTagName
        }
      ]);
    }
  };

  const isTagsHasCurrentTag = (
    currentTag: string | null,
    tags: Array<Tag>
  ): boolean => {
    if (currentTag === null) return false;
    let result = false;
    tags.forEach(tag => {
      if (currentTag === tag.name) {
        result = true;
      }
    });
    return result;
  };

  const findTagById = (id: number): Tag => {
    return tags.filter(tag => tag.id === id)[0];
  };

  const findTagByName = (name: string): Tag => {
    return tags.filter(tag => tag.name === name)[0];
  };

  const updateTag = (newTag: Tag): void => {
    setTags(tags.map(tag => (tag.id === newTag.id ? newTag : tag)));
  };

  const deleteTag = (id: number): void => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  return {
    tags,
    setTags,
    findTagById,
    findTagByName,
    updateTag,
    deleteTag,
    addTag,
    isTagsHasCurrentTag
  };
};

export { useTags };
