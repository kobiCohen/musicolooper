import React, { Component } from 'react';
import './song.css'
var FaPlayCircle = require('react-icons/lib/fa/play-circle');
var FaStopCircle = require('react-icons/lib/fa/stop-circle')

class Song extends Component {
constructor(props){
  super(props)
  this.state= {
    isPlaying : false
  }
  
  this.props = props
}
stopOrStartSong(){
  console.log(this.state.isPlaying)
  var song = {Id:this.props.Id, url:this.props.url, owner:this.props.owner}
  this.props.playerCallback(song, this.state.isPlaying)
  if (this.state.isPlaying){
    this.setState({isPlaying:false})
  }
  else{
    this.setState({isPlaying:true})
  }
  
}
changeVolume(){

}
render() {
  var icon;
  if (!this.state.isPlaying){
    console.log("icon is play")
   icon = 
        <FaPlayCircle/>
      }
        else {
      console.log("icon is stop")
    icon = 
        <FaStopCircle/>
    }
    return (
        <div className = "song-container">
            <hr/>
            <div className = "Icon-container">
              <span id='clickableAwesomeFont' onClick={this.stopOrStartSong.bind(this)}>  
              {icon}
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
              <input className ="slider is-fullwidth is-info" step="1" min="0" max="100" value="50" type="range" onChange = {this.changeVolume}>
              </input>
              </div>
          </div>
            
            
        </div>
          
    );
  }
}

export default Song;