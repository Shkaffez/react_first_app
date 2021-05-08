import { applyMiddleware, combineReducers, createStore, compose, Action } from "redux";
import authReduser from "./Auth_Reduser";
import dialogsReduser from "./DialogsPage_Reduser";
import postsReduser from "./PostsPage_Reduser";
import sideBarReduser from "./SideBar_Reduser";
import usersReduser from "./Users_Reduser";
import ReduxThunk, { ThunkAction } from "redux-thunk";
import appReduser from "./App_Reduser";

let rootReduser = combineReducers({
    dialogsPage: dialogsReduser,
    postsPage: postsReduser, 
    sideBar: sideBarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    app: appReduser,
});

type RootReduserType = typeof rootReduser;
export type AppStateType = ReturnType<RootReduserType>;

type PropertiesTypes<T> = T extends {[key: string] : infer U} ? U : never; 
//Если T являеся объектом, у которого ключ строка, то с помощью infer выведи мне тип значения и верни, а
//в противном случае ничего не возвращай.

export type InferActionTypes<T extends {[key: string]: (...args: any[])=> any}> = ReturnType< PropertiesTypes<T>>
//На тип T наложено ограниечение, он может быть только объектом с ключем стринг и значением функцией,
//принимающей и возвращающей что-то. В InferActionTypes записывается тип, полученный с помощью ReturnType
//В итоге в InferActionTypes внутрь <> можно передать typeof объекта, содержащего в себе action creator'ы, 
//и он выведет их типы.

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// let store = createStore(redusers, applyMiddleware(ReduxThunk));
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReduser, composeEnhancers(applyMiddleware(ReduxThunk)));


export default store;