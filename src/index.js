import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import reduxThunk from 'redux-thunk'
import routes from './routes';

import App from './components/App';
import ChefApp from './components/ChefApp';
import CurrentRecipe from './components/CurrentRecipe';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import RecipeApp from'./components/RecipeApp';
import RecipeNotes from './components/RecipeNotes';
import RequireAuth from './components/auth/require_auth';
import Layout from './components/Layout';
import NewNotes from './components/NewNotes';
import NoteBox from './components/NoteBox';
import reducers from './reducers';
import {AUTH_USER} from './actions/types';
import promise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(reduxThunk, promise)(createStore);
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
    <Route path="chefs" component={RequireAuth(ChefApp)} />
    <Route path="notebox" component={RequireAuth(NoteBox)} />
    <Route path ="newnote" component={RequireAuth(NewNotes)} />
    <Route path="recipes/:id" component={RequireAuth(CurrentRecipe)} />
    <Route path=":id" component={RequireAuth(RecipeNotes)} />
  </Route>
  </Router>
  </Provider>
  ,document.getElementById("app"));


