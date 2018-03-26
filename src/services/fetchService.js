import Post from "./../ent/Post";
import Author from "./../ent/Author";

class Service {
    constructor() { }

    fetchPost = () => {
        return fetch('http://localhost:3004/posts')
            .then(response => response.json())
            .then(posts => {
                return posts.reverse().map(post => {
                    return new Post(post.userId, post.id, post.title, post.body)
                })
            })


    }
    fetchPostfromAuthor = (userId) => {
        return fetch(`http://localhost:3004/posts?userId=${userId}`)
            .then(response => response.json())
            .then(posts => {
                return posts.slice(0, 3).map(post => {
                    return new Post(post.userId, post.id, post.title, post.body)
                })
            })
    }

    // fetchSearch = (title) => {
    //     return fetch(`http://localhost:3004/posts?title=${title}`)
    //         .then(response => response.json())
    //         .then(searchAll => {
    //             return searchAll.filter(search => { return search.indexOf(this.state.search) !== -1
    //                 return new Post(search.userId, search.id, search.title, search.body)
    //             })
    //         })
    // }

    fetchAuthor = () => {
        return fetch("http://localhost:3004/users")
            .then(response => response.json())
            .then(authors => {
                return authors.map(author => {
                    return new Author(author.id, author.name, author.username, author.email, author.address, author.phone, author.website, author.company)
                })
            })
    }
    fetchSingleAuthor = (id) => {
        return fetch(`http://localhost:3004/users/${id}`)
            .then(response => response.json())
            .then(author => {

                return new Author(author.id, author.name, author.username, author.email, author.address, author.phone, author.website, author.company)

            })
    }

    fetchSinglePost = (id) => {
        return fetch(`http://localhost:3004/posts/${id}`)
            .then(response => response.json())
            .then(post => {

                return new Post(post.userId, post.id, post.title, post.body)

            })


    }

}

export const service = new Service();