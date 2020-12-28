import { combineReducers, createStore } from "redux";
import dialogsReduser from "./DialogsPage_Reduser";
import postsReduser from "./PostsPage_Reduser";
import sideBarReduser from "./SideBar_Reduser";
import usersReduser from "./Users_Reduser";

let redusers = combineReducers({
    dialogsPage: dialogsReduser,
    postsPage: postsReduser, 
    sideBar: sideBarReduser,
    usersPage: usersReduser,
});

let store = createStore(redusers);

export default store;