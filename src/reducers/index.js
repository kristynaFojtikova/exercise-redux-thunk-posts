/*
 * Created Date: Sat, 10th Jul 2021, 15:16:52 pm
 * Author: Kristyna Fojtikova
 */

import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";


export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});