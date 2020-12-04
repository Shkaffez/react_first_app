import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.post_props.posts.map(post => <Post message={post.message} />)

  let newPostElement = React.createRef();


  let buttonEvent = () => {    
    props.addPost();
    
  }
 
  let onTextChange = () => {    
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (

    <div className={style.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange = { onTextChange } ref = { newPostElement } value = {props.post_props.newPostText}/>
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