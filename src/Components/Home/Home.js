import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    },[])
    return (
        <div>
            <h1> This is Home</h1>
            <h3>I have got {posts.length} post</h3>
            {
                posts.map(post=><Post post={post}></Post>)
            }
        </div>
    );
};

export default Home;