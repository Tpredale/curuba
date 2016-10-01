import React, {Component} from 'react';
import {connect} from 'react-redux';


class ChefList extends Component{
  renderList(){
    return this.props.chefs.map(chef) => {
      return (
        <li key={chef.name} className="list-group-item"> {chef.name} </li>
        )
    }
  }
  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
      )
  }
}


function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(ChefList);