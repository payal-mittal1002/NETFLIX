import React from 'react'
import logo from "../../download.png"
import { Link } from 'react-router-dom'
import {ImSearch} from 'react-icons/im'
const Header = () => {
  return (
    
    <div className='Header'>
    <img src={logo}></img>
       
       <Link to="/TV">TV Shows</Link>
       <Link to="/Movie">Movies</Link>
       <Link to="/added">Recently Added</Link>
       <Link to="/list">My List</Link>
       <ImSearch/>
    </div>
  )
}

export default Header