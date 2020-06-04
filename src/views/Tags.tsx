import React from 'react';
import styled from 'styled-components';
import Layout from 'components/Layout';

const TagsWrap = styled.section`
  background: #fff;
  >ol{
    display: flex;
    >li{
      margin: 5px;
    }
  }
`
const TagButton = styled.button`
  font-size: 14px;
  border-radius: 18px;
  padding: 5px 20px;
  line-height: 22px;
  color: #484848; 
  border: none;
  background: #D9D9D9;
`
const AddTagButton = styled.button``
const Tags = () => {
  return (
    <Layout>
      <TagsWrap>
        <ol>
          <li>
            <TagButton>衣</TagButton>
          </li>
          <li>
            <TagButton>食</TagButton>
          </li>
          <li>
            <TagButton>住</TagButton>
          </li>
          <li>
            <TagButton>行</TagButton>
          </li>
        </ol>

        <AddTagButton>新增标签</AddTagButton>
      </TagsWrap>

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
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>删除</button>
          </div>
          <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>清空</button>
          </div>
          <div>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>OK</button>
          </div>
          <div>
            <button>0</button>
            <button>.</button>
            <button>%</button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Tags;
