import * as React from 'react';
import Error from 'src/components/error';

describe("Component: Error", () => {
    it("should render the correct markup", () => {
        const errorMessage = "This is an error message";
        const logo = shallow(<Error message={errorMessage} />);
        expect(logo).to.have.className("error")
            .and.have.text(errorMessage);
    });
});
