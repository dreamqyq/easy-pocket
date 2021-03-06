import React from 'react';
import { Layout } from 'components/Layout';
import { useTags } from 'hooks/useTags';
import { Link } from 'react-router-dom';
import { Icon } from 'components/Icon';
import styled from 'styled-components';
import { Button } from 'components/Button';
import { Center } from 'components/Center';

const TagList = styled.ol`
  background: #fff;
  > li {
    border-bottom: 1px solid #d5d5d5;
    padding: 12px 0;
    width: 94%;
    margin-left: 3%;
    > a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 20px;
      > span {
        max-width: 94%;
      }
    }
  }
`;

const Tags: React.FC = () => {
  const { tags, addTag } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map(tag => (
          <li key={tag.id}>
            <Link to={`/tags/${tag.id}`}>
              <span className="oneLine">{tag.name}</span>
              <Icon name="right" />
            </Link>
          </li>
        ))}
      </TagList>
      <Center>
        <Button onClick={addTag}>新增标签</Button>
      </Center>
    </Layout>
  );
};

export default Tags;
