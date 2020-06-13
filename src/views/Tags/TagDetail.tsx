import React from 'react';
import { useParams } from 'react-router-dom';
import { useTags } from 'hooks/useTags';
import { Layout } from 'components/Layout';
import { Icon } from 'components/Icon';
import { Button } from 'components/Button';
import { Center } from 'components/Center';
import styled from 'styled-components';
import { Input } from 'components/Input';

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
  const { tagId } = useParams<Params>();
  const { findTagNameById } = useTags();
  const tagName = findTagNameById(parseInt(tagId)).name;
  return (
    <Layout>
      <TopBar>
        <Icon name="left" />
        <span>编辑标签</span>
        <Icon />
      </TopBar>
      <div>
        <InputWrapper>
          <Input label="标签名" type="text" placeholder="请输入标签名" defaultValue={tagName} />
        </InputWrapper>
        <Center>
          <Button>删除标签</Button>
        </Center>
      </div>
    </Layout>
  );
};

export default TagDetail;

