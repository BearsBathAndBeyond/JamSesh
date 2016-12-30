import React from 'react';
import { Link } from 'react-router';

const Navbar = () => (
  <div className="navbar navbar-default">
    <div className="container">
      <ul className="nav nav-pills">
        <li>
          <Link className="dark button" to="/"><span>Home</span></Link>
        </li>
        <li>
          <Link className="dark button" to="sign-in"><span>Sign in</span></Link>
        </li>
        <li>
          <Link className="dark button" to="sign-up"><span>Sign up</span></Link>
        </li>
        <li>
          <Link className="dark button" to="create-group"><span>Create Group</span></Link>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
