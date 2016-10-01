import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import reduxThunk from 'redux-thunk'
import routes from './routes';

import App from './components/App';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import RecipeApp from'./components/RecipeApp';
import RequireAuth from './components/auth/require_auth';
import Layout from './components/Layout';
import reducers from './reducers';
import {AUTH_USER} from './actions/types';



const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
if(token){
  store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
  <Router history={browserHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Layout} />
    <Route path="signin" component={Signin} />
    <Route path="signout" component={Signout} />
    <Route path="signup" component={Signup} />
    <Route path="recipes" component={RequireAuth(RecipeApp)} />
  </Route>
  </Router>
  </Provider>
  ,document.getElementById("app"));