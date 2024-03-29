import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './normal.scss';
import Tags from 'views/Tags';
import Pocket from 'views/Pocket';
import Bill from 'views/Bill';
import NoMatch from 'views/NoMatch';
import TagDetail from 'views/Tags/TagDetail';
import Chart from 'views/Chart';
import BillDetail from 'views/Bill/BillDetail';
import { Emoji } from 'components/Emoji';

const Wrapper = styled.div`
  color: #333;
  background: #e6e6e8;
  max-width: 500px;
  margin: 0 auto;
`;

const QRCodeWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  z-index: 9999;
  > span{
    padding: 10px;
    cursor: pointer;
  }
  > img{
    width: 250px;
    height: 250px;
  }
`;

function App() {
  const [showQRCode, setShowQRCode] = useState(false);
  useEffect(() => {
    const body = document.querySelector('body');
    setShowQRCode(body!.clientWidth > 500);
  }, []);
  return (
    <Wrapper>
      {showQRCode ? (
        <QRCodeWrap>
          <img src={require('static/qrcode.png')} alt="https://dreamqyq.github.io/easy-pocket/" /> <br />
          温馨提示：使用手机扫码查看体验更好呦 <br />
          <Emoji
            label='close'
            onClick={() => setShowQRCode(false)}
            symbol='❎'
          >关闭提示
          </Emoji>
        </QRCodeWrap>
      ) : null}
      <Router>
        <Switch>
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route exact path="/tags/:tagId">
            <TagDetail />
          </Route>
          <Route exact path="/pocket">
            <Pocket />
          </Route>
          <Route exact path="/bill">
            <Bill />
          </Route>
          <Route exact path="/bill/:recordId">
            <BillDetail />
          </Route>
          <Route exact path="/chart">
            <Chart />
          </Route>
          <Redirect exact from="/" to="/bill" />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
