import { connect } from 'react-redux';
import { addPost, updateNewPostText } from '../../Redux/PostsPage_Reduser';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
  return {
    posts: state.postsPage.posts,
    newPostText: state.postsPage.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps, { addPost, updateNewPostText })(MyPosts);

export default MyPostsContainer;