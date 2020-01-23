import React, {Component} from 'react';

class Feed extends Component{
    constructor(props){
        super(props);

        this.state = {
            posts: [
                {id:0, name: 'Ítalo Henrique', photo: 'https://static.vibe.com/files/2017/02/Roll-Safe-1485964928-compressed.jpg', data: '23/01/2020 12:31:00'},
                {id:1, name: 'Pedro Ambrosio', photo: 'https://static.vibe.com/files/2017/02/Roll-Safe-1485964928-compressed.jpg', data: '23/01/2020 12:31:00'},
                {id:2, name: 'Vitor Miranda', photo: 'https://static.vibe.com/files/2017/02/Roll-Safe-1485964928-compressed.jpg', data: '23/01/2020 12:31:00'},
                {id:3, name: 'Stellinda Oliveira', photo: 'https://static.vibe.com/files/2017/02/Roll-Safe-1485964928-compressed.jpg', data: '23/01/2020 12:31:00'}
            ]
        }
    }

    render(){
        return(
            <div>
                {this.state.posts.map((post) => {
                    return (
                        <div id={post.id}>
                            <h2>{post.name}</h2>
                            <img src={post.photo} alt={post.name}/>
                            <h5>{post.data}</h5>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Feed;