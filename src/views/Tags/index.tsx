import React from 'react';
import Layout from 'components/Layout';
import { useTags } from 'useTags';
import { Link } from 'react-router-dom';

const Tags: React.FC = () => {
  const { tags } = useTags();
  return (
    <Layout>
      <ol>
        {
          tags.map(tag => (
            <li key={tag}>
              <Link to={`/tags/${tag}`}>
                {tag}
              </Link>
            </li>
          ))
        }
      </ol>
    </Layout>
  );
};

export default Tags;
