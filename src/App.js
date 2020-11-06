import './App.css';
import { React, useEffect } from "react";
import { getTokenFromURL } from "./spotify";
import Login from './Login';
import Player from "./Player";
import { useStateValues } from './StateProvider';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValues();

  useEffect(() => {
   (async() => {
      try{
        const _token = getTokenFromURL();
        if(_token){
          // dispatch an event to set token
          dispatch({
            type: "SET_TOKEN",
            token: _token
          })

          window.location.hash = "";

          // set user accesstoken
          spotify.setAccessToken(_token);

          // fetch user profile from spotify
          const user = await spotify.getMe();

          // dispatch an event to update the state
          dispatch({
            type: "SET_USER",
            user
          });

          // fetch user playlists
          const playlists = await spotify.getUserPlaylists();
          // console.log("PLAYLISTS:::", playlists);
          // dispatch an event to update the state
          dispatch({
            type: "SET_PLAYLISTS",
            playlists
          });

          // setting initial playlist
          const playlistId = playlists?.items[0]?.id;
          // console.log("playlistId :::", playlistId)
          if(playlistId){
            const initial_playlist = await spotify.getPlaylist(playlistId);

            dispatch({
              type: "SET_INITIAL_PLAYLIST",
              initial_playlist
            })
          }
        }
      }catch(err){
        console.log("error occured :: ", err);
      }
    })();
  }, []);

  // console.log("👨🏼‍🦱 => ", user);
  return (
    <div className="app">
      {
        token ? <Player spotify={spotify} /> : <Login />
      }
    </div>
  );
}

export default App;
