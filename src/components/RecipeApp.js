import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import Recipes from './recipes';
import RecipeList from '../components/RecipeList';


class RecipeApp extends Component {

  static propTypes = {
    status: PropTypes.string.isRequired,
    matches: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const actions = bindActionCreators(action, this.props.dispatch);
    return (
      <div>
        <div id="header" className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 search-bar-content">
                <h2>Recipe search powered by</h2> <a href='http://www.yummly.com/recipes'><img alt='Yummly' src='http://static.yummly.com/api-logo.png'/></a>
                <Recipes actions={actions} status={this.props.status} />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
        <RecipeList actions={actions} matches={this.props.matches} status={this.props.status}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
    return {
        authenticated: state.auth.authenticated,
        matches: state.matches.matches,
        status: state.matches.status,
    }
}

export default connect(mapStateToProps)(RecipeApp);