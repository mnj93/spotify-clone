import React from 'react';
import './Body.css';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';
import { useStateValues } from './StateProvider';

const Body = ({ spotify }) => {
  const [{ initial_playlist }, dispatch] = useStateValues();
  return(
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={initial_playlist?.images[0]?.url} />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h4>{initial_playlist?.name}</h4>
          <p>{initial_playlist?.description}</p>
        </div>
      </div>

      {/* body for songs start here */}
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body_shufflePlay" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* {console.log("INITIAL PLAYLIST :::: ", initial_playlist)} */}
        {
          initial_playlist?.tracks?.items?.map((_track, index) => {
            return <SongRow key={index} track={_track.track} />
          })
        }
      </div>
    </div>
  )
}

export default Body;
