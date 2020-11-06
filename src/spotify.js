/**
 * contains spotify service related code here
 * defined constants for api and helpers for calling api
 */

export const SPOTIFY_CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URL = process.env.REACT_APP_REDIRECT_URL;
const SCOPES = [
"user-read-recently-played",
"user-read-playback-position",
"user-read-playback-state",
"user-modify-playback-state",
"user-read-currently-playing",
"user-read-email",
"user-library-read",
"user-top-read",
"playlist-read-private"
]
export const login_url = `https://accounts.spotify.com/authorize?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URL)}&scope=${SCOPES.join("%20")}&show_dialog=true&response_type=token`;

export const getTokenFromURL = () => {
  const hash = window.location.hash;
  const params = hash.substring(1);
  const param_hash = params.split("&").reduce((initial, current) => {
    const param_afetr_splt = current.split('=');
    initial[param_afetr_splt[0]] = param_afetr_splt[1];
    return initial;
  }, {});
  return param_hash.access_token;
}