import store from '../store';
import { getPostsSuccess, setLoading } from "../actions";
import axios from 'axios';

export function getPosts(tags) {
    store.dispatch(setLoading(true));

    /* https://www.flickr.com/services/feeds/photos_public.gne does not allow CORS.
     * As per https://www.sitepoint.com/community/t/how-to-get-flickr-api-working-correctly-in-my-app-using-webpack-and-react/242273
     * we need to use the rest URL with API key
     */
    /*axios.get('/flickr/', {
        params: {
            tags,
            format: "json",
            nojsoncallback: true,
        }
    })*/
    axios.get('/flickr/' + tags)
    .then((response) => {
        console.log("response:", response);
        store.dispatch(getPostsSuccess(response.data.items));
        store.dispatch(setLoading(false));
    }).catch((error) => {
        console.log(error);
    });
};