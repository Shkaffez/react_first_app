// let _callSubscriber = () => {};

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Ivan" },
        { id: 2, name: "Zlata" },
        { id: 3, name: "Den" },
        { id: 4, name: "Foksi" },
        { id: 5, name: "Taldom" }
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "I'm fine" }
      ],
      newMessageText: ''
    },
    postsPage: {
      posts: [
        { id: 1, message: "Hi, how are you?" },
        { id: 2, message: "It is my first post" }
      ],
      newPostText: ''
    },
    sideBar: {
      friendLink: [
        { name: "Zlata", avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zHnsoD29FF3uZIXlcdhTNGrM7jAEzNuaEg&usqp=CAU" },
        { name: "Den", avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zHnsoD29FF3uZIXlcdhTNGrM7jAEzNuaEg&usqp=CAU" },
        { name: "Ivan", avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zHnsoD29FF3uZIXlcdhTNGrM7jAEzNuaEg&usqp=CAU" }
      ]
    }
  },
  
  _callSubscriber () { },

  getState () {
    return this._state
  },
  
  subscribe (observer) {
        this._callSubscriber = observer;
  },


  dispatch (action) {
    switch(action.type) {
      case 'ADD-POST':
        let post = {
          id: parseInt(this._state.postsPage.posts[this._state.postsPage.posts.length - 1].id + 1),
          message: this._state.postsPage.newPostText
        }
        this._state.postsPage.posts.push(post);
        this._state.postsPage.newPostText = '';
        this._callSubscriber(this._state);
        break;
      case 'UPDATE-NEW-POST-TEXT':
        this._state.postsPage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;
      case 'ADD-MESSAGE':
        let message = {
          id: parseInt(this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1),
          message: this._state.dialogsPage.newMessageText
        }
    
        this._state.dialogsPage.messages.push(message);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
        break;
      case 'UPDATE-NEW-MESSAGE-TEXT':
        this._state.dialogsPage.newMessageText = action.newMessage;
        this._callSubscriber(this._state);
        break;
      default: console.log('error: wrong type');
    }
  }

}

export default store;

