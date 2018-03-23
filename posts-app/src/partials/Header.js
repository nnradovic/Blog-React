import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {


    return(
        <nav className="#26a69a teal lighten-1">
        <div className="nav-wrapper container">
          <a href="#" className="brand-logo">BLOG</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/posts" className="link">Home</Link></li>
            <li><Link to="/authors" className="link">Authors</Link></li>
            <li><Link  to="/about" className="link">About</Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Header;