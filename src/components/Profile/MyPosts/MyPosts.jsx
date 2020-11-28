import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.post_props.map(post => <Post message={post.message} />)

  let newPostElement = React.createRef();


  let buttonEvent = () => {
    let post = newPostElement.current.value;
    alert(post);
  }

  return (

    <div className={style.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref = { newPostElement }></textarea>
        </div>
        <div>
          <button onClick={ buttonEvent }>add post</button>
        </div>
      </div>
      <div>
        New post
      </div>
      <div className={style.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;