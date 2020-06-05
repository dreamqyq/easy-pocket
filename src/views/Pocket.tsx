import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';

const TagsSection = styled.section`
  background: #fff;
  padding: 12px 16px;
  > ol{
    margin-left: -12px;
    > li{
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
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
const Pocket = () => {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ol>
        <button>新增标签</button>
      </TagsSection>

      <section>
        <label>
          备注
          <input type="text" placeholder="在这里添加备注" />
        </label>
      </section>

      <section>
        <span>支出</span>
        <span>收入</span>
      </section>

      <section>
        <div>100</div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
          <button>%</button>
        </div>
      </section>
    </Layout>
  );
};

export default Pocket;
