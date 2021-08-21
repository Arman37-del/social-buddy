import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const [post, setPost] = useState([])
    const { id } = useParams();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [id])
    return (
        <div>
            <h1>This is Post Details: {id}</h1>
            <h3>User Posted :   {post.userId}</h3>
            <p>Title : {post.title}</p>
            <p>Body : {post.body}</p>
            <h3>Number of Comments : {comments.length}</h3>
{
    comments.map(comment =><Comment comment={comment}></Comment>)
}
        </div>
    );
};

export default PostDetail;