import React, { Component } from 'react';

import Logo from "./logo"
import SearchBar from './searchBar';
import ResentPosts from './recentPosts';

export default class Home extends Component {

  handleSearchBarSubmit(query) {
    console.log('tryng to handle submit for query', query)
    this.props.history.push('/results');
}

  render() {
    return (
      <div className='app'>
        <div>
          <Logo/>
          <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
          <ResentPosts/>
        </div>
      </div>
    );
  }
}
