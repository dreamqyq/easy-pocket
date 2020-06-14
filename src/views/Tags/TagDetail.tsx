import React, { ChangeEventHandler } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useTags } from 'hooks/useTags';
import { Layout } from 'components/Layout';
import { Icon } from 'components/Icon';
import { Button } from 'components/Button';
import { Center } from 'components/Center';
import styled from 'styled-components';
import { Input } from 'components/Input';
import { Tag } from 'types';

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #fff;
`;

const InputWrapper = styled.div`
  background: #fff;
  padding: 0 16px;
  margin-top: 8px;
`;

type Params = {
  tagId: string
}
const TagDetail: React.FC = () => {
  const { tagId: tagIdString } = useParams<Params>();
  const { findTagById, updateTag, deleteTag } = useTags();
  const currentTag = findTagById(parseInt(tagIdString));
  const history = useHistory();

  const onChangeHandle: ChangeEventHandler<HTMLInputElement> = (event) => {
    updateTag({ id: currentTag.id, name: event.target.value });
  };

  const onClickHandle = () => {
    deleteTag(currentTag.id);
  };

  const clickHandle = () => {
    history.goBack();
  }

  const tagContent = (currentTag: Tag) => (
    <div>
      <InputWrapper>
        <Input
          label="标签名" type="text" placeholder="请输入标签名"
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
      <TopBar>
        <Icon name="left" onClick={clickHandle}/>
        <span>编辑标签</span>
        <Icon />
      </TopBar>
      {
        currentTag ? tagContent(currentTag) : <Center>当前标签不存在</Center>
      }
    </Layout>
  );
};

export default TagDetail;

