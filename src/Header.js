import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useStateValues } from './StateProvider';

export default function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValues()
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Songs or Podcasts" type="text"></input>
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="avatar" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}
