### myflickr
###### By Indra Arifin

#### About myflickr

This app searches images from Flickr public feed (https://www.flickr.com/services/feeds/docs/photos_public).

The search result includes:
- A thumbnail image
- The author
- The date taken
- The tags
- A link through to the full size image 

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

#### Notes

Since the original Flickr API doesn't support CORS, I am using webpack-dev-server proxy to retrieve the data.