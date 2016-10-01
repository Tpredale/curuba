import React, { Component, PropTypes } from 'react';

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
                    <a href="#">{item.recipeName}</a>
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
