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
import TagDetail from "views/Tags/TagDetail";
import styled from 'styled-components';

const Wrapper = styled.div`
  color: #333;
`;

function App() {
  return (
    <Wrapper>
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
          <Route exact path="/statistics">
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
