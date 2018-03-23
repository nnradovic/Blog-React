import React, { Component } from 'react';
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom'
import './App.css';
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import Main from "./pages/Main";
import SinglePost from "./pages/SinglePost";
import About from "./pages/About";
import ListAuthors from "./pages/ListAuthors";
import SingleAuthor from "./pages/SingleAuthor";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/posts" component={Main}/>
          <Route path="/posts/1" component={SinglePost}/>
          <Redirect  exact from="/" to="/posts"/>
          <Route exact  path="/about" component={About}/>
          <Route  exact  path="/authors" component={ListAuthors}/>
          <Route   path="/authors/1" component={SingleAuthor}/>
        </Switch>
        <Footer />
        </div>
       

 
    );
  }
}

export default App;