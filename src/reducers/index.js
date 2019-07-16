import { combineReducers } from 'redux';
import {GET_POSTS_SUCCESS, SET_LOADING} from "../actions";

const initialState = {
    loading: true,
    items: [],
};

const postsReducer = function(state = initialState, action) {
    switch(action.type) {
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                items: [
                    ...action.items,
                ],
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





