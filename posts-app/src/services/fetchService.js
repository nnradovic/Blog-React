import Post from "./../ent/Post";

class Service {
    constructor() {}

    fetchPost = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(posts => {
                console.log(posts);
                return posts.map(post=>{
                    return new Post(post.userId,post.id,post.title,post.body)
                })
            })
    } 
}

export const service = new Service()