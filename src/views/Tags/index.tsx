import React from 'react';
import Layout from 'components/Layout';
import { useTags } from "useTags";
import { Link } from "react-router-dom";

const Tags: React.FC = () => {
  const { tags } = useTags();
  return (
    <Layout>
      <ol>
        {
          tags.map(tag => (
            <Link to={`/tags/${tag}`}>
              <li key={tag}>{tag}</li>
            </Link>
          ))
        }
      </ol>
    </Layout>
  );
};

export default Tags;
