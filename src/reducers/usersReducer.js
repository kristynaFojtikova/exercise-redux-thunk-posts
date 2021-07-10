/*
 * Created Date: Sat, 10th Jul 2021, 21:29:52 pm
 * Author: Kristyna Fojtikova
 */

import { FETCH_USER } from "../actions";

const usersReducer = (users = [], action) => {
    switch (action.type) {
        case FETCH_USER:
            return [...users, action.payload];
        default:
            return users;
    }
}

export default usersReducer;