import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const { value, keyup } = props

  return (
    <nav className="#000000 black">
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo"> <i className="large material-icons">tune</i> B l o g </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/posts" className="link">Home</Link></li>
          <li><Link to="/authors" className="link">Authors</Link></li>
          <li><Link to="/newpost" className="link">Create New Post</Link></li>
          <li><Link to="/about" className="link">About</Link></li>
          <li><input type="search" placeholder="Search" value={value} onChange={keyup} /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;