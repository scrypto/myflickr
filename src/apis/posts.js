import store from '../store';
import { getPostsSuccess, getPostsFailure, setLoading } from "../actions";
import axios from 'axios';

export function getPosts(tags) {
    store.dispatch(setLoading(true));
    axios.get('/flickr/' + tags)
    .then((response) => {
        store.dispatch(getPostsSuccess(response.data.items));
        store.dispatch(setLoading(false));
    }).catch((error) => {
        console.log(error);
        store.dispatch(getPostsFailure());
        store.dispatch(setLoading(false));
    });
};