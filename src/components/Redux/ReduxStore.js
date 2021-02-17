import { applyMiddleware, combineReducers, createStore } from "redux";
import authReduser from "./Auth_Reduser";
import dialogsReduser from "./DialogsPage_Reduser";
import postsReduser from "./PostsPage_Reduser";
import sideBarReduser from "./SideBar_Reduser";
import usersReduser from "./Users_Reduser";
import ReduxThunk from "redux-thunk";
import appReduser from "./App_Reduser";

let redusers = combineReducers({
    dialogsPage: dialogsReduser,
    postsPage: postsReduser, 
    sideBar: sideBarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    app: appReduser,
});

let store = createStore(redusers, applyMiddleware(ReduxThunk));

window.store = store;

export default store;