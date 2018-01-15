import React, { Component } from 'react';

class Song extends Component {
constructor(){
  super()
  this.state= {
  }
}
  render() {
    return (
        <div>
          bb
            id is {this.props.id}
            owner is {this.props.owner}
            url is {this.props.url}
        </div>
          
    );
  }
}

export default Song;