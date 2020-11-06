import { React } from "react";
import './Login.css';
import { login_url } from "./spotify";

const Login = () => {
  return(
    <div className="login-container">
      <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyglwC1H_ckCKXbbTvKRSluLDfYAwbCV6IVA&usqp=CAU" alt="spotfy"></img>
      <a className="login-button" href={login_url}>Login With Spotify</a>
    </div>
  )
}

export default Login;
