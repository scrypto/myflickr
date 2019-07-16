import * as React from 'react';
import Loading from 'src/components/loading';

describe("Component: Loading", () => {
    it("should render the correct markup", () => {
        const loading = shallow(<Loading />);
        expect(loading).to.have.className("loading");

        const loadingIcon = loading.find("FaSpinner");
        expect(loadingIcon).to.be.present();
    });
});
