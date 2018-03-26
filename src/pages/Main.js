import React from "react";
import { Link, Route } from "react-router-dom";
import { service } from "./../services/fetchService";
import "./Main.css"

class Main extends React.Component {
  constructor(props) {
    super(props);



    this.state = {
      posts: [],
      search: ''
    }

  }

  fetchPosts = () => {
    service.fetchPost()
      .then(postObj => {
        this.setState({
          posts: postObj,

        })
      })
  }


  componentDidMount() {
    this.fetchPosts();



  }

  renderPost = (filterPost) => {
    return (
      <div className="col s12 m12 center ">
        <div className="card #9e9e9e grey">

          <Link to={`/posts/${filterPost.id}`} className="card-content white-text " key={filterPost.id}>
            <br />
            <i className="medium material-icons">fingerprint</i>
            <br />
            <span className="card-title">"{filterPost.title}"</span>
            <h5>Description: </h5>

            <h5>{filterPost.body}</h5>

          </Link>
        </div>
      </div>
    )
  }

  render() {
    let posts = this.state.posts
    let filterPost = posts.filter((singlePost) => { return singlePost.title.indexOf(this.state.search) !== -1 })
    console.log(filterPost);

    return (
      <div className="container " >
        <div className="row">

          {this.state.posts.map((filterPost) => this.renderPost(filterPost))}

        </div>
      </div>
    )
  }

}

export default Main;