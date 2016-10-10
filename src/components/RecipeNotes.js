import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchNote, deleteNote, fetchRecipe} from '../actions/index'
import {Link} from 'react-router';

class RecipeNotes extends Component {
  static contextTypes ={
    router: PropTypes.object
  }
  componentWillMount(){
    this.props.fetchNote(this.props.params.id);
    this.props.fetchRecipe(this.props.params.id);


  }


  onDeleteClick(){
    this.props.deleteNote(this.props.params.id)
    .then(() => {
      this.context.router.push('notebox')
      });
    }

  render(){

    if(!this.props.note && !this.props.recipe){
      return <div> Coming Soon... </div>
    }

  return(
  <div>
  <Link to="notebox" > My NoteBox </Link>
  <button
  className=" btn btn-primary pull-right"
  onClick={this.onDeleteClick.bind(this)}>
  Delete Note
  </button>
  <h4> {this.props.note['0'].title} </h4>
  <h5>Total Time: {this.props.recipe.totalTime} </h5>
  <h5>Yield: {this.props.recipe.yield} </h5>
  <h5> Tags: {this.props.note['0'].categories}</h5>
  <h2>  {this.props.recipe.name}</h2>
  {this.props.recipe.ingredientLines.map((ingredient, index) => {
    return (
      <div>
      <ul>
        <li key={`IngredientItem_${index}_${ingredient}`}>
        {ingredient}
        </li>
      </ul>
      </div>
    )
  })
}
  <p> Notes: {this.props.note['0'].content} </p>
  <img className="img-responsive" src={this.props.recipe.images["0"].hostedLargeUrl} alt="" />
  </div>
    )
  }

}
function mapStateToProps(state){
  console.log(state);
  return {
    note: state.notes.note,
    recipe: state.currentRecipe.recipe
  };
}

export default connect(mapStateToProps, {fetchNote, deleteNote, fetchRecipe})(RecipeNotes);