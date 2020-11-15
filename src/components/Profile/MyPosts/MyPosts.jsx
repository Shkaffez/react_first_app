import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    {id: 1, message: "Hi, how are you?"},
    {id: 2, message: "It is my first post"}
  ]

  return (

    <div>
      My posts
      <div>
      New post
      </div>
      <div className={style.posts}>
        <Post message = {postsData[0].message} />
        <Post message = {postsData[1].message} />
        
      </div>
    </div>
  )
}

export default MyPosts;