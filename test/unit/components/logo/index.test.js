import * as React from 'react';
import Logo from 'src/components/logo';

describe("Component: Logo", () => {
    it("should render the correct markup", () => {
        const logo = shallow(<Logo />);
        expect(logo).to.have.className("logo")
            .and.have.text("myflickr");
    });
});
