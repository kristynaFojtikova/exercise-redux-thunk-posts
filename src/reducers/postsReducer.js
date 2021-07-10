/*
 * Created Date: Sat, 10th Jul 2021, 16:14:02 pm
 * Author: Kristyna Fojtikova
 */

import { FETCH_POSTS } from "../actions";

const postsReducer = (posts = [], action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload;
        default:
            return posts;
    }
}

export default postsReducer;

