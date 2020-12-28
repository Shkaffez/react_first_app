import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../Redux/PostsPage_Reduser';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
  return {
    posts: state.postsPage.posts,
    newPostText: state.postsPage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  addPost: () => dispatch(addPostActionCreator()),
  updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text))
  }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;