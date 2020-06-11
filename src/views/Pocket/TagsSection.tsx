import styled from 'styled-components';
import React from 'react';
import { useTags } from 'hooks/useTags';
import { Tag } from 'types';
import { createId } from 'utils/createId';

const Wrapper = styled.section`
  background: #fff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol{
    margin-left: -12px;
    > li{
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background: #f60;
      }
    }
  }
  > button{
    background: none;
    border: none;
    border-bottom: 1px solid #333;
    padding: 2px 4px;
    color: #666;
    margin-top: 8px;
  }
`;

type Props = {
  value: Array<Tag>,
  onChange: (selectedTags: Array<Tag>) => void
}

const TagsSection: React.FC<Props> = (props) => {
  const { tags, setTags } = useTags();
  const selectedTagsList = props.value;
  const isTagsHasCurrentTag = (currentTag: string | null, tags: Array<Tag>): boolean => {
    if (currentTag === null) return false;
    let result = false;
    tags.forEach(tag => {
      if(currentTag === tag.name){
        result = true;
      }
    })
    return result;
  };
  const addNewTag = () => {
    const newTagName = window.prompt('请输入新标签的名字');
    if (newTagName === null || newTagName === '') return;
    if (isTagsHasCurrentTag(newTagName, tags)) {
      window.alert('该标签名已存在，请不要重复添加！');
    } else {
      setTags([...tags, {
        id: createId(),
        name: newTagName
      }]);
    }
  };

  const onToggleSelectedTag = (selectedTag: Tag) => {
    if (isTagsHasCurrentTag(selectedTag.name, selectedTagsList)) {
      props.onChange(selectedTagsList.filter(tagObj => tagObj.id !== selectedTag.id));
    } else {
      props.onChange([...selectedTagsList, selectedTag]);
    }
  };

  return (
    <Wrapper>
      <ol>
        {
          tags.map(tag => (
            <li key={tag.id} className={isTagsHasCurrentTag(tag.name, selectedTagsList) ? 'selected' : ''}
                onClick={() => onToggleSelectedTag(tag)}>{tag.name}</li>
          ))
        }
      </ol>
      <button onClick={addNewTag}>新增标签</button>
    </Wrapper>
  );
};

export { TagsSection };
