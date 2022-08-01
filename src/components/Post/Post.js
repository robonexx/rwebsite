import React from 'react'

import './Post.scss'

const Post = React.forwardRef(({post}, ref) => {

    const postBody = (
        <div className='post'>
        <h2>{post.title}</h2>
        <h4>{post.body}</h4>
        <p>Post id: {post.id}</p>
        </div>
    )

    const content = ref
    ? <article ref={ref}>{postBody}</article> 
    : <article>{postBody}</article>
    
  return content
})

export default Post
