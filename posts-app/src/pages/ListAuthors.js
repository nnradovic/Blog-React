import React from "react";
import {Link, Route} from "react-router-dom";

const ListAuthors = ()=>{
    return(
        <div className="container">
        <h3 className="center">Authors(6)</h3>
        <div className="collection">
        <Link to="/authors/1" className="collection-item">Alvin</Link>
        <Link to="/authors/1" className="collection-item">Alvin</Link>
        <Link to="/authors/1" className="collection-item">Alvin</Link>
        <Link to="/authors/1" className="collection-item">Alvin</Link>
        <Link to="/authors/1" className="collection-item">Alvin</Link>
      </div>
      </div>
    )
}

export default ListAuthors;