import React from 'react';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/PostsPage_Reduser';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post message={post.message} key={post.id} />)

  let newPostElement = React.createRef();


  let onAddPost = () => {    
    props.addPost();
    // props.dispatch(addPostActionCreator())
    
  }
 
  let onTextChange = () => {    
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // props.dispatch(updateNewPostTextActionCreator(text));
  }
  
  return (

    <div className={style.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange = { onTextChange } ref = { newPostElement } value = {props.newPostText}/>
        </div>
        <div>
          <button onClick={ onAddPost }>add post</button>
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