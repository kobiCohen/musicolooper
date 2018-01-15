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
    playSong(song){
        var audio = new Audio(song.url);
        audio.pause()
        audio.play()
    }
    stopSong(song){
        var audio = new Audio(song.url);
        audio.pause()
    }
    playAll(){
        this.stopSong(this.state.songList[0])
    }

    render() {
        return (
            <div className = "looper-body">
                <a className="button is-rounded" onClick = {this.playAll}>Play</a>
                <a className="button is-rounded">Sync</a>
                <div>
                <br/><br/>
                Select track
                <br/>
                {this.state.songList.map(song =>{
                   return (
                    <Song key = {song.Id} Id = {song.Id} owner= {song.owner} url = {song.url} playCallback = {this.playSong} stopCallback = {this.stopSong}>
                    </Song>
                    ) 
                })}  
                </div>   
            </div>
    );
  }
}

export default Looper;
