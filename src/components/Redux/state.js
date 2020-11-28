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
          ]
    },
    postsPage: {
        posts: [
            {id: 1, message: "Hi, how are you?"},
            {id: 2, message: "It is my first post"}
          ]
    },
    sideBar: {
      friendLink: [
        {name: "Zlata", avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zHnsoD29FF3uZIXlcdhTNGrM7jAEzNuaEg&usqp=CAU" },
        {name: "Den", avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zHnsoD29FF3uZIXlcdhTNGrM7jAEzNuaEg&usqp=CAU" },
        {name: "Ivan", avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zHnsoD29FF3uZIXlcdhTNGrM7jAEzNuaEg&usqp=CAU" }
      ]
    }
}

export default state;