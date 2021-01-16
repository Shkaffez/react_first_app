import { combineReducers, createStore } from "redux";
import authReduser from "./Auth_Reduser";
import dialogsReduser from "./DialogsPage_Reduser";
import postsReduser from "./PostsPage_Reduser";
import sideBarReduser from "./SideBar_Reduser";
import usersReduser from "./Users_Reduser";

let redusers = combineReducers({
    dialogsPage: dialogsReduser,
    postsPage: postsReduser, 
    sideBar: sideBarReduser,
    usersPage: usersReduser,
    auth: authReduser,
});

let store = createStore(redusers);

window.store = store;

export default store;