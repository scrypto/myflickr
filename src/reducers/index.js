import { combineReducers } from 'redux';
import { GET_POSTS_SUCCESS, GET_POSTS_FAILURE, SET_LOADING } from "../actions/actionTypes";

const initialState = {
    loading: true,
    items: [],
    error: false,
};

const postsReducer = function(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                items: [
                    ...action.items,
                ],
                error: false,
            };
        case GET_POSTS_FAILURE:
            return {
                ...state,
                error: true,
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading,
            };
    }

    return state;

};

const posts = combineReducers({
    postState: postsReducer
});

export default posts





