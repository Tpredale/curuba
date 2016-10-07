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
    console.log(props);

    this.props.createNote(props)
    .then( () => {
      this.context.router.push('notebox');
    });
  }



  render(){

  const {fields: {title, categories, content},handleSubmit} = this.props;




    if(!this.props.currentRecipe){
      return <div>  </div>
    }

    console.log(this.props);
    return(
  <div>
  <Link to="recipes" > Recipe Search </Link>
  <h2>  {this.props.currentRecipe.name}</h2>
  <p> {this.props.currentRecipe.ingredientLines} </p>
  <img className="img-responsive" src={this.props.currentRecipe.images["0"].hostedLargeUrl} alt="" />


  <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
      <h3> Add a Recipe Note </h3>



      <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
      <label> Title </label>
      <input type="text" className="form-control" {...title} />
      <div className="text-help">
      {title.touched ? title.error : ''}
      </div>
      </div>

      <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
      <label> Tags </label>
      <input type="text" className="form-control" {...categories} />
      <div className="text-help">
      {categories.touched ? categories.error : ''}
      </div>
      </div>

      <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
      <label> Note </label>
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
  if(!values.title){
    errors.title = 'Please Enter a title';
  }
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
  fields: ['title', 'categories', 'content', 'recipeId'],
  validate
}, mapStateToProps, {fetchRecipe, createNote})(CurrentRecipe)

//export default connect(mapStateToProps, {fetchRecipe})(CurrentRecipe);