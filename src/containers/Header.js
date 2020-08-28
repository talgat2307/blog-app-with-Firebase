import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div>
      <nav className='navbar'>
        <h2><Link to='/'>My Blog</Link></h2>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/posts/add'>Add</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;