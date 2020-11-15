import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
  return (
    <div class={style.item}>
      <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zHnsoD29FF3uZIXlcdhTNGrM7jAEzNuaEg&usqp=CAU"></img>
        {props.message}
    </div>
  )
}

export default Post;