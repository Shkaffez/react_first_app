const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostTextActionCreator = (newText) => ({type: 'UPDATE-NEW-POST-TEXT',
                                                             newText: newText,
                                                            });

const postsReduser = (state, action) => {
switch(action.type) {
    case ADD_POST:
      let post = {
        id: parseInt(state.posts[state.posts.length - 1].id + 1),
        message: state.newPostText
      }
      state.posts.push(post);
      state.newPostText = '';      
      return state;
    case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;      
      return state;
    default:
        return state;
    }
}

export default postsReduser;