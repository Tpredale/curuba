import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {fetchRecipe, createNote} from '../actions/index'
import {Link} from 'react-router';



class CurrentRecipe extends Component {

  static contextTypes ={
    router: PropTypes.object
  }

  componentWillMount(){
    this.props.fetchRecipe(this.props.params.id);
  }

  onSubmit(props){
    const recipeId = this.props.params.id;
    const title = this.props.currentRecipe.name;
    props.title = title;
    props.recipeId = recipeId;
    this.props.createNote(props)
    .then( () => {
      this.context.router.push('notebox');
    });
  }



  render(){
    const {fields: {categories, content},handleSubmit} = this.props;
    console.log(this.props.currentRecipe);
    if(!this.props.currentRecipe){
      return <div>  </div>
    }

    return(
  <div>
  <Link to="recipes" > Recipe Search </Link>
  <h2>  {this.props.currentRecipe.name}</h2>

  Total Time: {this.props.currentRecipe.totalTime}

  {this.props.currentRecipe.ingredientLines.map((ingredient, index) => {
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
  <img className="img-responsive" src={this.props.currentRecipe.images["0"].hostedLargeUrl} alt="" />


  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>



      <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
      <label> Tags </label>
      <input type="text" className="form-control" {...categories} />
      <div className="text-help">
      {categories.touched ? categories.error : ''}
      </div>
      </div>

      <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
      <label> Notes: </label>
      <textarea className="form-control" {...content} />
      <div className="text-help">
      {content.touched ? content.error : ''}
      </div>
      </div>

      <button type="submit" className="btn btn-primary"> Submit </button>
      <Link to="notebox" className="btn btn-primary"> Cancel </Link>

      </form>
      </div>

    )
  }

}
function validate(values){
  const errors = {};

  if(!values.categories){
    errors.categories = 'Please Add a Tag';
  }
  if(!values.content){
    errors.content = 'Please Add Your Note';
  }


  return errors;
}

function mapStateToProps(state){

  return {currentRecipe: state.currentRecipe.recipe};
}
export default reduxForm({
   form: 'NewNote',
  fields: ['categories', 'content'],
  validate
}, mapStateToProps, {fetchRecipe, createNote})(CurrentRecipe)

//export default connect(mapStateToProps, {fetchRecipe})(CurrentRecipe);