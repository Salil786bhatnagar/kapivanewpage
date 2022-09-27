import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
        <div className='div-navbar'>
          <ul>
             <Link to='/'>
                <li>Home</li>
             </Link>
             <Link to='/Aboutus'>
                <li>About us</li>
             </Link>
          </ul>
        </div>
    </div>
  )
}
