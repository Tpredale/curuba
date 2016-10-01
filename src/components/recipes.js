import React, {Component, PropTypes} from 'react';
import ReactDom from 'react-dom'
import {connect} from 'react-redux';
import * as actions from '../actions';

class Recipes extends Component {
 static propTypes = {
    actions: PropTypes.object,
    status: PropTypes.string,
  };

  searchRecipe(event) {
    if (event.which === 13) {
      const val = ReactDom.findDOMNode(this.refs.keyword).value;
      this.props.actions.searchRecipeAction(val);
      console.log(this.props);

      document.getElementById('header').style.animationPlayState = 'running';
    }
  }
  render(){
    return (
      <div>
        <div className="form-group">
          <input onKeyDown={this.searchRecipe.bind(this)} type="text" ref="keyword" className="form-control input-lg" placeholder="Chili, Greek Salad, Grilled Chicken, etc + Enter" />
        </div>
        {()=>{
          if (this.props.status === 'PENDING') {
            return (<div className="loading" />);
          }
        }}
      </div>
    );
  }
}

export default connect(null, actions)(Recipes);

