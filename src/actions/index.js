export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const SET_LOADING = 'SET_LOADING';

export function getPostsSuccess(items) {
    return {
        type: GET_POSTS_SUCCESS,
        items,
    };
}

export function setLoading(loading) {
    return {
        type: SET_LOADING,
        loading
    };
}