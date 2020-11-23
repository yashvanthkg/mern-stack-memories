import React from 'react'
import  { useSelector } from 'react-redux'

import Post from './post/Post'
import useStyles from './styles'
function Posts() {
    const classes = useStyles();
    const posts = useSelector(state => state.posts );
    return (
        <>
            <h2>Posts</h2>
            <Post />
            <Post />
        </>
    )
}

export default Posts
