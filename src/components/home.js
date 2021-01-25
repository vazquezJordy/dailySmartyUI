import React, { Component } from 'react';

import Logo from "./logo"
import SearchBar from './searchBar';
import ResentPosts from './recentPosts';

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <Logo/>
          <SearchBar/>
          <ResentPosts/>
        </div>
      </div>
    );
  }
}
