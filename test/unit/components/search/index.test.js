import * as React from 'react';
import Search from 'src/components/search';

describe("Component: Search", () => {
    it("should render the correct markup", () => {
        const search = shallow(<Search />);
        expect(search).to.have.className("search");

        const searchIconContainer = search.find(".searchIcon");
        expect(searchIconContainer).to.be.present();

        const searchIcon = searchIconContainer.find("FaSearch");
        expect(searchIcon).to.be.present();

        const searchInput = search.find(".searchInput");
        expect(searchInput).to.be.present()
            .and.have.props({
                placeholder: "Enter search",
                value: "",
        });
    });

    it("should update text when typing", () => {
        const search = shallow(<Search />);
        const searchInput = search.find(".searchInput");

        searchInput.simulate("change", { target: { value: "News" } });

        expect(search.state("searchValue")).to.equal("News");
    });
});