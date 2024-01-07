import { applyMiddleware, combineReducers, legacy_createStore, legacy_createStorecreateStore } from "redux";
import {thunk} from "redux-thunk";
import { noteReducer } from "./notes/note.reducer";
import userReducer from "./users/user.reducer";

let rootReducer = combineReducers({
    userReducer:userReducer,
    noteReducer:noteReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))
// import { configureStore } from '@reduxjs/toolkit';
// import {thunk} from 'redux-thunk';
// import { combineReducers} from 'redux'
// import {noteReducer} from './notes/note.reducer';
// import userReducer from './users/user.reducer';

// const rootReducer = combineReducers({
//   userReducer: userReducer,
//   noteReducer: noteReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: [thunk],
// });
