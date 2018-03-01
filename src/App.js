import React, { Component } from 'react';
import './App.css';

let textColor = '#fff';

let defaultStyles = {
  color: textColor
};

let fakeServerData = {
  user: {
    name: 'Axel',
    playlists: [
      {
        name: 'My favorites',
        songs : [
          {name: 'Beat it', duration: 1345},
          {name: 'Cannelloni Makaroni', duration: 2542},
          {name : 'Rosa helikopter', duration: 1352}
        ]
      },
      {
        name: 'Discover weekly',
        songs : [
          {name: 'Le song', duration: 1535},
          {name: 'The song', duration: 1652},
          {name: 'Songen', duration: 1564}
        ]
      },
      {
        name: 'Chill tracks',
        songs : [
          {name: 'Instrumental electronic', duration: 1464},
          {name: 'piano', duration: 2654},
          {name: 'BFG Devision', duration: 4526}
        ]
      },
      {
        name: 'World hits',
        songs : [
          {name: 'I sound like this', duration: 1568},
          {name: 'I sound the same', duration: 3251},
          {name: 'I almost sound the same', duration: 6215}
        ]
      }
    ]
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyles, width: '40%', display: 'inline-block'}}>
        <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    )
  }
}

class HourCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist)=> {
      return songs.concat(eachPlaylist.songs)
    }, []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0);
    return (
      <div style={{...defaultStyles, width: '40%', display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} Hours</h2>
      </div>
    )
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyles}>
        <img />
        <input type='text'/>
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyles, width: '25%', display: 'inline-block'}}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {serverData: {}}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData});
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
            <h1 style={{color: textColor}}>
              {this.state.serverData.user.name}´ Title
            </h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
            <HourCounter playlists={this.state.serverData.user.playlists}/>

            <Filter/>

            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div> : <h1 style={defaultStyles}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
