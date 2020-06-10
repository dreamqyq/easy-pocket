import React from 'react';
import Layout from 'components/Layout';
import { useTags } from 'useTags';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';
import styled from 'styled-components';

const TagList = styled.ol`
  background: #fff;
  > li{
    border-bottom: 1px solid #d5d5d5;
    padding: 12px 0;
    width: 94%;
    margin-left: 3%;
    > a{
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: 20px;
      > span {
        max-width: 94%;
      }
    }
  }
`
const Button = styled.button`
  font-size: 18px;
  border: none;
  padding: 8px 12px;
  background: #f60;
  border-radius: 4px;
  color: #fff;
`

const Center = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Tags: React.FC = () => {
  const { tags } = useTags();
  return (
    <Layout>
      <TagList>
        {
          tags.map(tag => (
            <li key={tag}>
              <Link to={`/tags/${tag}`}>
                <span className="oneLine">
                  {tag}
                </span>
                <Icon name="right" />
              </Link>
            </li>
          ))
        }
      </TagList>
      <Center>
        <Button>新增标签</Button>
      </Center>
    </Layout>
  );
};

export default Tags;
