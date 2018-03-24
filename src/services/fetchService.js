import Post from "./../ent/Post";
import Author from "./../ent/Author";

class Service {
    constructor() { }

    fetchPost = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                return posts.map(post => {
                    return new Post(post.userId, post.id, post.title, post.body)
                })
            })


    }

    fetchAuthor = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(authors => {
                return authors.map(author => {
                    return new Author(author.id, author.name, author.username, author.email, author.address, author.phone, author.website, author.company)
                })
            })
    }
    fetchSingleAuthor = (id) => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(author => {

                return new Author(author.id, author.name, author.username, author.email, author.address, author.phone, author.website, author.company)

            })
    }

    fetchSinglePost = (id) => {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(post => {

                return new Post(post.userId, post.id, post.title, post.body)

            })


    }

}

export const service = new Service();