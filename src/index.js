import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import routes from './routes';
import './gestalt/dist/gestalt.css';
import './reset.css';
import CardPage from './CardPage';
import { slide as Menu } from 'react-burger-menu'
import './App.css'
import registerServiceWorker from './registerServiceWorker';

const container = document.getElementById('root');


if (container instanceof Element) {
    ReactDOM.render(
      <HashRouter>
        <App>
          <Switch>
            {Object.keys(routes).map(pathname => (
              <Route
                path={`/${pathname}`}
                key={pathname}
                render={() => <CardPage cards={routes[pathname]} />}
              />
            ))}
          </Switch>
        </App>
      </HashRouter>,
      container
    );
  } else {
    throw new Error("No element with id 'root' found in index.html file");
  }