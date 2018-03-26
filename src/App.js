import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Main from "./pages/Main";
import SinglePost from "./pages/SinglePost";
import About from "./pages/About";
import ListAuthors from "./pages/ListAuthors";
import SingleAuthor from "./pages/SingleAuthor";
import NewPost from "./pages/NewPost";
import EditPost from "./pages/EditPost"
import { service } from "./services/fetchService";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }

  }

  updateSearch = (event) => {
    this.setState({ search: event.target.value })
    console.log(event.target.value);
  }


  render() {



    return (
      <div>
        <Header value={this.state.search} keyup={this.updateSearch} />
        <Switch>
          <Route exact path="/posts" component={Main} search={this.state.search} />
          <Route path="/posts/:id" component={SinglePost} />
          <Route path="/edit/:id" component={EditPost} />
          <Redirect exact from="/" to="/posts" />
          <Route exact path="/about" component={About} />
          <Route exact path="/authors" component={ListAuthors} />
          <Route path="/authors/:id" component={SingleAuthor} />
          <Route path="/newpost/" component={NewPost} />
        </Switch>

        <Footer />
      </div>



    );
  }
}

export default App;
