import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';

import { GlobalStyle } from "./styles";
import "bootstrap/scss/bootstrap-reboot.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import Routes from "./routes";
import Layout from './components/Layout';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <>
        <GlobalStyle />
        <Layout>
          <Routes />
        </Layout>
      </>
    </Router>
  );
}

export default App;
