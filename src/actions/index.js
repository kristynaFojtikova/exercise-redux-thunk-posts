/*
 * Created Date: Sat, 10th Jul 2021, 15:16:57 pm
 * Author: Kristyna Fojtikova
 */
import _ from "lodash"

import jsonPlaceholders from "../apis/jsonPlaceholders";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_USER = "FETCH_USER";

export const fetchPosts = () =>
    async dispatch => {
        const response = await jsonPlaceholders.get("/posts");
        dispatch({
            type: FETCH_POSTS,
            payload: response.data
        })
    }

export const fetchUser = (id) => {
    return async (dispatch) => {
        const response = await jsonPlaceholders.get(`/users/${id}`);
        dispatch({
            type: FETCH_USER,
            payload: response.data
        })
    }
}

export const fetchPostsAndUsers = () => {
    return async (dispatch, getState) => {
        await dispatch(fetchPosts())

        // ANOUTHER WAY
        // const uniqueUserIds = _.uniq(_.map(getState().posts, "userId"))
        // uniqueUserIds.forEach(userId => dispatch(fetchUser(userId)))

        // LODASH WAY
        _.chain(getState().posts).map("userId").uniq().forEach(id => dispatch(fetchUser(id))).value()

        // RAMDA WAY
        // R.propOr([], "posts")(getState()).uniq().forEach(id => dispatch(fetchUser(id)))
    }
}

// MEMOISE

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch)

// const fetchUser = (id) => {
//     return (dispatch) => {
//         return _fetchUser(id, dispatch)
//     }
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceholders.get(`/users/${id}`);
//     dispatch({
//         type: FETCH_USER,
//         payload: response.data
//     })
// })


