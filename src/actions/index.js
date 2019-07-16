import * as types from './actionTypes';

export function getPostsSuccess(items) {
    return {
        type: types.GET_POSTS_SUCCESS,
        items,
    };
}

export function getPostsFailure() {
    return {
        type: types.GET_POSTS_FAILURE,
    };
}

export function setLoading(loading) {
    return {
        type: types.SET_LOADING,
        loading
    };
}