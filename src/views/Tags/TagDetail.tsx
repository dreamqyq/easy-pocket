import React from 'react';
import { useParams } from 'react-router-dom';
import { useTags } from 'hooks/useTags';
import { Layout } from 'components/Layout';
import { Icon } from 'components/Icon';
import { Button } from 'components/Button';
import { Center } from 'components/Center';
import styled from 'styled-components';

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #fff;
`

type Params = {
  tagId: string
}
const TagDetail: React.FC = () => {
  const { tagId } = useParams<Params>();
  const { findTagNameById } = useTags();
  const tagName = findTagNameById(parseInt(tagId)).name
  return (
    <Layout>
      <TopBar>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </TopBar>
      <div>
        <label>
          <span>标签名</span>
          <input type="text" placeholder="请输入标签名" />
        </label>
        {tagName}
        <Center>
          <Button>删除标签</Button>
        </Center>
      </div>
    </Layout>
  )
};

export default TagDetail;

