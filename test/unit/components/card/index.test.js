import * as React from 'react';
import Card from 'src/components/card';

const defaultItem = {
    ownername: "Jo Smith",
    datetaken: "2019-07-15T02:12:18-08:00",
    tags: "tag1 tag2 tag3 tag4",
    url_o: "https://www.flickr.com/photos/54989697@N02/48288403276/",
    url_n: "https://live.staticflickr.com/65535/48288403276_e0e4d71cdf_m.jpg"
};

describe("Component: Card", () => {
    it("should render the correct markup", () => {
        const card = shallow(<Card key="1" item={defaultItem} />);
        expect(card).to.have.className("card");

        const thumbnail = card.find(".thumbnail");
        const thumbnailImage = thumbnail.find("img");
        expect(thumbnailImage).to.have.props({
            src: defaultItem.url_n,
        });

        const details = card.find(".details");
        const items = details.find(".item");

        const expectedItems = [
            {
                label: "Author:",
                value: defaultItem.ownername
            },
            {
                label: "Date taken:",
                value: "7/15/2019, 8:12:18 PM"
            },
            {
                label: "Tags:",
                value: defaultItem.tags
            }
        ];

        items.forEach((item, index) => {
            const label = item.find(".label");
            const value = item.find(".value");
            expect(label).to.have.text(expectedItems[index].label);
            expect(value).to.have.text(expectedItems[index].value);
        });

        const button = card.find(".button");
        const link = button.find(".link");

        expect(link).to.have.props({
            href: defaultItem.url_o,
            target: "_blank"
        });
    });
});
