import * as React from 'react';
import Header from 'src/containers/header';

describe("Container: Header", () => {
    it("should render the correct markup", () => {
        const headerContainer = shallow(<Header />);
        expect(headerContainer).to.have.className("headerContainer");

        const header = headerContainer.find(".header");
        expect(header).to.be.present();

        const logo = header.find("Logo");
        expect(logo).to.be.present();

        const search = header.find("Search");
        expect(search).to.be.present();
    });
});