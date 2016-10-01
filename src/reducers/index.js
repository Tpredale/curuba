import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import matches from './recipe_reducer';
import chefsReducer from './chefs_reducer';


const rootReducer = combineReducers({
  form: form,
  auth: authReducer,
  matches: matches,
  chefs: chefsReducer
});

export default rootReducer;
