import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navBar">
    <span className="title">RANDOM MEME GENERATOR</span>
    <span className="links">
      <Link to="/">
        Meme Generator
      </Link>
    </span>
    <span className="links">
      <Link to="mymemes">
        My Memes
      </Link>
    </span>
  </div>
);

export default NavBar;
