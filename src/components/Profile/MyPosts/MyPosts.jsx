import React from 'react';
import { InputForm } from '../../common/inputForm';
// import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/PostsPage_Reduser';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements = props.posts.map(post => <Post message={post.message} key={post.id} />)

  let addNewPost = (values) => {    
    props.addPost(values.textArea);    
  }

  return (
    <div className={style.myPosts}>
      <h3>My posts</h3>
      <InputForm onSubmit={addNewPost} />
      {/* <div>
        <div>
          <textarea onChange = { onTextChange } ref = { newPostElement } value = {props.newPostText}/>
        </div>
        <div>
          <button onClick={ onAddPost }>add post</button>
        </div>
      </div> */}
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