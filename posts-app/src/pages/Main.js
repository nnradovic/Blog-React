import React from "react";
import {Link, Route} from "react-router-dom";

const Main = () =>{

    return (
        <div className="container ">
        <div className="col s12 m6 center ">
          <div className="card #26a69a teal lighten-1  ">
            <Link to="/posts/1"className="card-content white-text ">
              <span  className="card-title">Title 1</span>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
              <hr/>
              </Link>
  
        </div>
      </div>
     </div>
    )
}

export default Main;