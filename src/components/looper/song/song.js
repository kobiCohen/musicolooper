import React, { Component } from 'react';
import './song.css'
class Song extends Component {
constructor(props){
  super(props)
  this.state= {
  }
  
  this.props = props
}
startSong(){
  console.log("i was caled")
  var song = {Id: this.props.Id, url:this.props.url, owner:this.props.owner}
  this.props.playCallback(song)
}

render() {
    return (
        <div className = "song-container">
            <hr/>
            <div className = "Icon-container">
            <span id='clickableAwesomeFont'  onClick={this.startSong.bind(this)}><i className ="fas fa-play-circle"></i>  
            </span>
            </div>

            <div className = "song-details" >
            Song: {this.props.Id}
            <br/>
            By: {this.props.owner}
            </div>
            <div className  = "side-options">
              <i className ="fa fa-trash" aria-hidden="true"></i>
            </div>
              <br/>
            <div className = "volume-settings">
              <i className ="fa fa-volume-up" aria-hidden="true"></i> 
              <div className = "slider-container">
              <input className ="slider is-fullwidth is-info" step="1" min="0" max="100" value="50" type="range">
              </input>
              </div>
          </div>
            
            
        </div>
          
    );
  }
}

export default Song;