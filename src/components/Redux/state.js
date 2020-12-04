

let renderEntireTree = () => {};

let state = {

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
            {id: 1, message: "Hi, how are you?"},
            {id: 2, message: "It is my first post"}
          ],
          newPostText: ''
    },
    sideBar: {
      friendLink: [
        {name: "Zlata", avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zHnsoD29FF3uZIXlcdhTNGrM7jAEzNuaEg&usqp=CAU" },
        {name: "Den", avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zHnsoD29FF3uZIXlcdhTNGrM7jAEzNuaEg&usqp=CAU" },
        {name: "Ivan", avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zHnsoD29FF3uZIXlcdhTNGrM7jAEzNuaEg&usqp=CAU" }
      ]
    }
}

window.state = state;

export let addPost = () => {
  let post = {
    id: parseInt(state.postsPage.posts[state.postsPage.posts.length - 1].id + 1),
    message: state.postsPage.newPostText
  }  
  state.postsPage.posts.push(post);
  state.postsPage.newPostText = '';
  renderEntireTree(state);
}

export let updateNewPostText = (newText) => {  
  state.postsPage.newPostText = newText;
  renderEntireTree(state);
}
 
export let addMessage = () => {  
  let message = {
    id: parseInt(state.dialogsPage.messages[state.dialogsPage.messages.length - 1].id + 1),
    message: state.dialogsPage.newMessageText
  }
  
  state.dialogsPage.messages.push(message);
  state.dialogsPage.newMessageText = '';
  renderEntireTree(state);
}

export let updateNewMessageText = (newMessage) => {
state.dialogsPage.newMessageText = newMessage;
renderEntireTree(state);
}

export let subscribe = (observer) => {
  renderEntireTree = observer;
}

export default state;