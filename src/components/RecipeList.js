import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router'

export default class RecipeList extends Component {
  static propTypes = {
    actions: PropTypes.object,
    matches: PropTypes.array,
    status: PropTypes.string,
  };


  render() {
    return (
      <div>
        <div className="row">
          {

              this.props.matches.map((item, index) => {
                return (
                    <div className="col-md-6 portfolio-item" key={`RecipeItem_${item.id}_${index}`}>
                    <img className="img-responsive" src={item.imageUrlsBySize['90']} alt="" />
                <h3>
                    <Link to={"recipes/"+item.id}>{item.recipeName}</Link>
                </h3>
            </div>


                );
              })
          }
        </div>
      </div>
    );
  }
}
