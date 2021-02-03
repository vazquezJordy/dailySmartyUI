import React, { Component } from 'react';

import Logo from "./logo"
import SearchBar from './searchBar';
import ResentPosts from './recentPosts';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {

  handleSearchBarSubmit(query) {
    this.props.fetchPostsWithQuery(query, () => {

    });
    this.props.history.push('/results');
}

  render() {
    return (
      <div className="home">
       
      <Logo/>
      <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
      <ResentPosts/>
        
      </div>
    );
  }
}
 export default connect(null, actions)(Home);
