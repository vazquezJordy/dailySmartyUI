import React, {Component } from 'react';

class Logo extends Component {
    render() {
        const size = {
            height:this.props.size ? this.props.size : 105,
            width:this.props.size ? this.props.size : 105
            
        }
        return (
            <div className="logo-main">
                <img style={size} src="/assets/ds_circle_logo.png"/>
            </div>
        )
    }
    }

    export default Logo;