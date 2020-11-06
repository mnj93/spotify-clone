import Body from "./Body";
import Sidebar from "./Sidebar";
import './Player.css';
import Footer from "./Footer";

const Player = ({ spotify }) => {
  return(
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
        <Footer />
    </div>
  )
}

export default Player;