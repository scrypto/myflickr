import store from '../store';
import { getPostsSuccess, getPostsFailure, setLoading } from "../actions";
import axios from 'axios';
import { flickrAPIKey } from "../config";

export function getPosts(tags) {
    store.dispatch(setLoading(true));

    const params = {
        api_key: flickrAPIKey,
        safe_search: 1,
        content_type: 1,
        per_page: 20,
        format: "json",
        extras: "description,date_taken,owner_name,tags,url_o,url_n",
        nojsoncallback: 1
    };

    if (tags) {
        params.method = "flickr.photos.search";
        params.tags = tags;
    } else {
        params.method = "flickr.photos.getRecent";
    }

    axios.get(`https://api.flickr.com/services/rest/`, {
        params
    })
    .then((response) => {
        console.log("response:", response);
        store.dispatch(getPostsSuccess(response.data.photos.photo));
        store.dispatch(setLoading(false));
    }).catch((error) => {
        console.log(error);
        store.dispatch(getPostsFailure());
        store.dispatch(setLoading(false));
    });
};