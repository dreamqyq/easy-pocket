import React from 'react';
import './normal.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Tags from 'views/Tags';
import Pocket from 'views/Pocket';
import Statistics from 'views/Statistics';
import NoMatch from 'views/NoMatch';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <Wrapper>
      <Router>
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
      </Router>
    </Wrapper>
  );
}

export default App;
