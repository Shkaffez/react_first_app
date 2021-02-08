import { connect } from 'react-redux';
import { addPost } from '../../Redux/PostsPage_Reduser';
import MyPosts from './MyPosts';


const mapStateToProps = (state) => {
  return {
    posts: state.postsPage.posts,
    newPostText: state.postsPage.newPostText
  }
}

const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);

export default MyPostsContainer;