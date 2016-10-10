import React, { Component } from 'react';
import ChefList from '../containers/chef-list';
import ChefDetail from '../containers/chef-detail';


export default class ChefApp extends Component {
     render(){
     return (
      <div className="chef">
       <ChefList />
       <ChefDetail />
      </div>
    );
  }
};

