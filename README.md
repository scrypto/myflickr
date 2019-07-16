### myflickr
###### By Indra Arifin

#### About myflickr

This app searches images from [Flickr public feed](https://www.flickr.com/services/feeds/docs/photos_public).

The search result includes:
- A thumbnail image
- The author
- The date taken
- The tags
- A link through to the full size image 

#### Important Notes

Since the original Flickr API doesn't support CORS, we are unable to retrieve the flickr feed using the current endpoint provided.

To fix this issue in dev environment, I have setup a webpack dev server proxy.

For production, we would need to find another flickr endpoint which allows CORS. I have found that using the private api endpoint
with API KEY to be one possible solution. However, this requires a Flickr account and they are currently not open to new sign-ups.

#### Tech Stacks
- React
- Redux
- Axios
- SASS
- Webpack
- Babel
- Mocha
- Chai
- Enzyme

#### How to use

For first time use, run `npm install`.
 
To start the app, run `npm start`.

To bundle the app, run `npm run build`.

To test the app, run `npm test`.