
let initialState = {  
    friendLink: [
      { 
        name: "Zlata", 
        avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zHnsoD29FF3uZIXlcdhTNGrM7jAEzNuaEg&usqp=CAU", 
        id: 1
      },
      { 
       name: "Den",
       avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zHnsoD29FF3uZIXlcdhTNGrM7jAEzNuaEg&usqp=CAU",
       id: 2
      },
      { 
        name: "Ivan",
        avatarSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_zHnsoD29FF3uZIXlcdhTNGrM7jAEzNuaEg&usqp=CAU",
        id: 3
      }
    ]  
}

const sideBarReduser = (state = initialState, action) => {
  return state;
}

export default sideBarReduser;