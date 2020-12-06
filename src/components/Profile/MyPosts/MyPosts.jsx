import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.store.getState().postsPage.posts.map(post => <Post message={post.message} />)

  let newPostElement = React.createRef();


  let buttonEvent = () => {    
    // props.store.addPost();
    props.store.dispatch({type: 'ADD-POST'})
    
  }
 
  let onTextChange = () => {    
    let text = newPostElement.current.value;
    // props.store.updateNewPostText(text);
    props.store.dispatch({type: 'UPDATE-NEW-POST-TEXT',
                       newText: text,
  });
  }

  return (

    <div className={style.myPosts}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange = { onTextChange } ref = { newPostElement } value = {props.store.getState().postsPage.newPostText}/>
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