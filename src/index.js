import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/App'
import Menu from './screens/Menu'
import Detalhe from './screens/Detalhe'


import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/Menu" component={Menu} />
            <Route path="/Detalhe" component={Detalhe} />
        </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);