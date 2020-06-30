import React, { ChangeEventHandler } from 'react';
import { useParams } from 'react-router-dom';
import { useTags } from 'hooks/useTags';
import { Layout } from 'components/Layout';
import { Button } from 'components/Button';
import { Center } from 'components/Center';
import styled from 'styled-components';
import { Input } from 'components/Input';
import { Tag } from 'types';
import { TopBar } from 'components/TopBar';

const InputWrapper = styled.div`
  background: #fff;
  padding: 0 16px;
  margin-top: 8px;
`;

type Params = {
  tagId: string;
};
const TagDetail: React.FC = () => {
  const { tagId: tagIdString } = useParams<Params>();
  const { findTagById, updateTag, deleteTag } = useTags();
  const currentTag = findTagById(parseInt(tagIdString));

  const onChangeHandle: ChangeEventHandler<HTMLInputElement> = event => {
    updateTag({ id: currentTag.id, name: event.target.value });
  };

  const onClickHandle = () => {
    deleteTag(currentTag.id);
  };

  const tagContent = (currentTag: Tag) => (
    <div>
      <InputWrapper>
        <Input
          label="标签名"
          type="text"
          placeholder="请输入标签名"
          value={currentTag.name}
          onChange={onChangeHandle}
        />
      </InputWrapper>
      <Center>
        <Button onClick={onClickHandle}>删除标签</Button>
      </Center>
    </div>
  );

  return (
    <Layout>
      <TopBar title="编辑标签" />
      {currentTag ? tagContent(currentTag) : <Center>当前标签不存在</Center>}
    </Layout>
  );
};

export default TagDetail;
