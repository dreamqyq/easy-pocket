import React from 'react';
import './App.scss';
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
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags">
          <Layout>
            <Tags/>
          </Layout>
        </Route>
        <Route path="/pocket">
          <Layout>
            <Pocket />
          </Layout>
        </Route>
        <Route path="/statistics">
          <Layout>
            <Statistics />
          </Layout>
        </Route>
        <Redirect exact from="/" to="/tags" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
