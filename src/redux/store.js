import {createStore,applyMiddleware  } from "redux"; 
// import { configureStore } from '@reduxjs/toolkit'            //createStore replaced
import logger from "redux-logger"; //track what action were dispataching
import thunk from "redux-thunk"; // for work with side efeect all the authincation
import rootReducer from "./root-reducer"

const middleware = [thunk];

if(process.env.NODE_ENV === "development"){
    middleware.push(logger);
}

const store = createStore(rootReducer,applyMiddleware(...middleware)); //createStore replaced with configureStore

export default store;