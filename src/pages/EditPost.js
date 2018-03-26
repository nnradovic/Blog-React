import React from "react";
import { Link } from "react-router-dom";
import { createHashHistory } from 'history';
import { service } from "./../services/fetchService";
import "./EditPost.css";
class EditPost extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTitle: '',
      newBody: ''
    }

    this.browserHistory = createHashHistory();
  }
  componentDidMount() {
    service.fetchSinglePost(this.props.match.params.id)
      .then(singlePost => {
        console.log(singlePost);
        this.setState({
          newTitle: singlePost.title,
          newBody: singlePost.body
        })
        return singlePost;
      })
  }

  handleChangeTitle = (e) => {
    console.log(e.target.value);
    this.setState({
      newTitle: e.target.value,
    })
  }

  handleChangeBody = (e) => {
    console.log(e.target.value);
    this.setState({
      newBody: e.target.value
    })
  }


  editPosts = (e) => {
    e.preventDefault()
    console.log(this.props.match.params.id);

    var url = 'http://localhost:3004/posts/' + this.props.match.params.id;
    var option = {
      method: 'PUT',
      body: JSON.stringify({
        title: this.state.newTitle,
        body: this.state.newBody
      }),
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
    fetch(url, option).then(function (data) {
      return data.json()
      console.log(data);

    })
      .then(() => {
        // this.browserHistory.push('/posts')
        window.location.href = "#/posts";
      })
  }


  render() {

    return (

      <div className="row container" >
        <form className="col s12 ">
          <h1>EDIT POST</h1>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Title" type="text" className="valInput" name="newTitle" value={this.state.newTitle} onChange={this.handleChangeTitle} />
              <label htmlFor="first_name"></label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea name="newBody" value={this.state.newBody} onChange={this.handleChangeBody} id="textarea2" placeholder="Content" className="materialize-textarea" data-length="120" ></textarea>
              <label htmlFor="textarea2"></label>
            </div>
          </div>

          <Link to="/" className="waves-effect #bdbdbd grey lighten-1 waves-light btn-large" ><i className="material-icons left">cancel</i>cancel</Link>
          {/* <button className="waves-effect waves-light btn-large"><i className="material-icons right">cancel</i>cancel</button> */}
          <button className="waves-effect #bdbdbd grey lighten-1 waves-light btn-large" onClick={this.editPosts}><i className="material-icons right">save</i>save</button>


          {/* <Link to="/" className="waves-effect waves-light btn-large" onClick={this.fetchPost}><i className="material-icons right">save</i>save</Link> */}
        </form>
      </div>


    )
  }
}

export default EditPost;