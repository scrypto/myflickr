import chai from "chai";
import chaiEnzyme from "chai-enzyme";
import enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

enzyme.configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());

// Ignore React Warnings in Unit tests
const __error = console.error;
console.error = (arg, ...args) => {
    if (typeof arg === "string" && arg.startsWith("Warning:")) {
        return;
    }
    __error.call(console, arg, ...args);
};
