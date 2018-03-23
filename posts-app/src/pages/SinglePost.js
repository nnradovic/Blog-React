import React from "react";
import {Link} from "react-router-dom";

const SinglePost = () => {


    return (
     
      <div className="container col s12 m6 center  ">
      <Link to="/posts" className="waves-effect waves-light btn-large"><i className="material-icons left">backspace</i>back</Link>
        <div className="card-content">
        <h3><Link to="/posts" >Post title 1</Link></h3>
        <Link to="/authors/1">Author Name</Link>
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
          I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.
          </p>
          <br/>
          <hr/>
        </div>
        <div className="card-tabs">
        <h3>3 more posts from same author</h3>
        </div>
        <div className="card-content grey lighten-4">
          <div id="test4"> <Link to="/posts">title 11 - velit, vulpate</Link></div>
          <div id="test5"> <Link to="/posts">title 11 - velit, vulpate</Link></div>
          <div id="test6"> <Link to="/posts">title 11 - velit, vulpate</Link></div>
        </div>
      </div>

    )
}

export default SinglePost;

