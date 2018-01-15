import React, { Component } from 'react';
import Song from './song/song'
var songService = require('./looperService.js')

class Looper extends Component {
    constructor(){
        super()
        this.state = {
            songList:[]            
        }
    }
    componentWillMount(){
        this.updateSongList()
    }
    updateSongList(){
        let songs = songService.getSongs();
            this.setState({
                songList: songs
        });
    
        
            }

    render() {
        return (
            <div>
                {this.state.songList.map(song =>{
                   return (
                    <Song key = {song.Id} Id = {song.Id} owner= {song.owner} url = {song.url}>
                    </Song>
                    ) 
                })}     
            </div>
    );
  }
}

export default Looper;
