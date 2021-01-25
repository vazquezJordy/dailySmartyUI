import React, { Component } from "react";

class ResentPosts extends Component {
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

export default ResentPosts;
