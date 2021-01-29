import React, { Component } from 'react';
import { connect } from 'react-redux';

 class ResultsPost  extends Component {
    render() {
        return (
            <div className="results-posts">
                <div className="results-posts_wrapper">
                    <ul className="results-posts_posts">
                        RESULTS GO HERE
                    </ul>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        state
    }
}
export default connect(mapStateToProps)(ResultsPost);