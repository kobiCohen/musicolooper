import './looper.css'
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
    playSong(song, isPlaying){
        var audioElm = document.getElementById("audio1");
        audioElm.src = song.url
        if (isPlaying){
            audioElm.pause()
        }
        else{
            audioElm.play()
        }
    }

    playAll(){
        this.stopSong(this.state.songList[0])
    }

    render() {
        return (
            <div className = "looper-body">
            <audio id="audio1">Canvas not supported</audio>
                <a className="button is-rounded" onClick = {this.playAll}>Play</a>
                <a className="button is-rounded">Sync</a>
                <div>
                <br/><br/>
                Select track
                <br/>
                {this.state.songList.map(song =>{
                   return (
                    <Song key = {song.Id} Id = {song.Id} owner= {song.owner} url = {song.url} playerCallback = {this.playSong}>
                    </Song>
                    ) 
                })}  
                </div>   
            </div>
    );
  }
}

export default Looper;
