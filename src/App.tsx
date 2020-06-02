import React from 'react';
import './App.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from 'components/Nav';
import Tags from 'views/Tags';
import Pocket from 'views/Pocket';
import Statistics from 'views/Statistics';
import NoMatch from 'views/NoMatch';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.main`
  flex: 1;
  overflow: auto;
`;


function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
          <Switch>
            <Route path="/tags">
              <Tags />
            </Route>
            <Route path="/pocket">
              <Pocket />
            </Route>
            <Route path="/statistics">
              <Statistics />
            </Route>
            <Redirect exact from="/" to="/tags" />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Main>
        <div>
          <Nav />
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
