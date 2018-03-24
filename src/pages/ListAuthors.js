import React from "react";
import { Link, Route } from "react-router-dom";
import { service } from "./../services/fetchService";

class ListAuthors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: []
        }
    }

    fetchAuthors = () => {
        service.fetchAuthor()
            .then(authorObj => {
                this.setState({
                    authors: authorObj
                })
            })
    }

    componentDidMount() {
        this.fetchAuthors();
    }





    render() {

        return (
            <div className="container" >
                <h3 className="center">Authors({this.state.authors.length})</h3>
                <div className="collection">
                    {this.state.authors.map(author => {
                        return (
                            <Link to={`/authors/${author.id}`} key={author.id} className="collection-item"><p>{author.name}</p></Link>
                        )
                    })}


                </div>
            </div>
        )
    }
}

export default ListAuthors;