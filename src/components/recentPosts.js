import React, { Component } from 'react';

import { connect } from 'react-redux';

import * as actions from '../actions';

class RecentPosts extends Component {

  componentDidMount(){
    this.props.fetchRecentPosts();
  }

  render() {
    return (
      <div className="recent-posts">
         <div className="recent-post-wrapper">
             <div className="recent-posts-heading">
                 recent posts
             </div>
             <ul className="recent-posts-posts">
                 <li>recnt posts 0 </li>
                 <li>recnt posts 1 </li>
                 <li>recnt posts 2 </li>
                 <li>recnt posts 3 </li>
             </ul>
         </div>
      </div>
    );
  }
}

export default connect(null, actions)(RecentPosts);
