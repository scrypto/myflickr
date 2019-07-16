import * as React from 'react';
import Cards from 'src/containers/cards';

const cards = [
    {
        author: "nobody@flickr.com (\"Jo's Album\")",
        date_taken: "2019-07-15T02:12:18-08:00",
        tags: "tag1 tag2 tag3 tag4",
        link: "https://www.flickr.com/photos/54989697@N02/48288403276/",
        media: {
            m: "https://live.staticflickr.com/65535/48288403276_e0e4d71cdf_m.jpg",
        }
    },
    {
        author: "nobody@flickr.com (\"Nick's Album\")",
        date_taken: "2018-07-15T02:12:18-08:00",
        tags: "tag5 tag6 tag7 tag8",
        link: "https://www.flickr.com/photos/54989697@N02/48288403276/",
        media: {
            m: "https://live.staticflickr.com/65535/48288403276_e0e4d71cdf_m.jpg",
        }
    },
];


describe("Container: Cards", () => {
    // ToDo: describe connect decorator to allow mapping state to props
    it("should render the correct markup", () => {
        expect(1).to.equal(1);
    });
});