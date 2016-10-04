import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {createNote} from '../actions/index';
import {Link} from 'react-router';

class NewNote extends Component{
  render(){
    const {fields: {title, categories, content},handleSubmit} = this.props;

        return (
      <form onSubmit={handleSubmit(this.props.createNote)}>
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
      );
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

export default reduxForm({
  form: 'NewNote',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createNote})(NewNote);