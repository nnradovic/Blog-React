import React from "react";
import {Link} from "react-router-dom";

const NewPost = () => {


    return (

        <div className="row container">
        <form className="col s12 ">
        <h1>NEW POST</h1>
          <div className="row">
            <div className="input-field col s6">
            <input placeholder="Title"  type="text"/>
          <label htmlFor="first_name"></label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="textarea2"  placeholder="Content" className="materialize-textarea" data-length="120"></textarea>
              <label htmlFor="textarea2"></label>
            </div>
          </div>
          <Link to="/" className="waves-effect waves-light btn-large"><i className="material-icons left">cancel</i>cancel</Link>
         <Link to="/" className="waves-effect waves-light btn-large"><i className="material-icons right">save</i>save</Link>
        </form>
      </div>
     
      
    )
}

export default NewPost;