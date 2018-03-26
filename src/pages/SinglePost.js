import React from "react";
import { Link } from "react-router-dom";
import { service } from "./../services/fetchService";
import "./SinglePost.css";


class SinglePost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      singlePost: {},
      singleAuthor: {},
      posts: []
    }
  }

  componentDidMount() {
    service.fetchSinglePost(this.props.match.params.id)
      .then(singlePost => {
        console.log(singlePost);
        this.setState({
          singlePost: singlePost
        })
        return singlePost;
      })
      .then((post) => {
        const singleAuthor = service.fetchSingleAuthor(post.userId);
        const authorPosts = service.fetchPostfromAuthor(post.userId);

        Promise.all([singleAuthor, authorPosts])
          .then((response) => {

            this.setState({
              singleAuthor: response[0],
              posts: response[1]
            })

          })
      })
  }

  componentWillReceiveProps(nextProps) {
    service.fetchSinglePost(nextProps.match.params.id)
      .then((post) => {
        this.setState({
          singlePost: post
        })
      })
  }

  deletePost = (e) => {
    e.preventDefault()
    console.log(this.props.match.params.id);

    var url = 'http://localhost:3004/posts/' + this.props.match.params.id;
    var option = {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }

    fetch(url, option).then(function (data) {
      console.log(data);
      return data.json()

    })
      .then(() => {
        // this.browserHistory.push('/posts')
        window.location.href = "#/posts";
      })
  }

  render() {
    return (

      <div className="container col s12 m6 center  ">
        <Link to="/posts" className="waves-effect #bdbdbd grey lighten-1 waves-light btn-large"><i className="material-icons left">backspace</i>back</Link>
        <div className="card-content">
          <h3><Link to="/posts" className="actTitle" >" {this.state.singlePost.title} "</Link></h3>
          <Link to={`/authors/${this.state.singlePost.userId}`} className="title">{this.state.singleAuthor.name}</Link>
          <p className="body">{this.state.singlePost.body}</p>
          <Link to={`/edit/${this.props.match.params.id}`} className="waves-effect #bdbdbd grey lighten-1 waves-light btn-large" ><i className="material-icons left">edit</i>Edit</Link>

          <button className="waves-effect  #bdbdbd grey lighten-1 waves-light btn-large" onClick={this.deletePost}><i className="material-icons right">delete</i>Delete</button>
          <hr />
        </div>
        <h5 className="more">3 more posts from same  author</h5>
        <div className="card-content ">
          <div className="act" id="test4">
            <ul>
              {this.state.posts.map(post => {
                return (
                  <Link to={`/posts/${post.id}`} key={post.id}>
                    <li>
                      <i class="material-icons">gesture</i>  {post.title}
                    </li>
                  </Link>
                )
              })}
            </ul>
          </div>

        </div>
      </div>

    )
  }
}

export default SinglePost;

