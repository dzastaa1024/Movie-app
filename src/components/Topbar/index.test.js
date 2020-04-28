import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import toJson from "enzyme-to-json";
import "jest-styled-components";
import Topbar from "./";

configure({ adapter: new Adapter() });

describe("TopBar", () => {
  it("check if handleChange is called", () => {
    const handleChange = jest.fn();
    const wrapper = shallow(<Topbar handleChange={handleChange} />);

    const Input = wrapper.find("input");
    Input.simulate("change");
    expect(handleChange).toHaveBeenCalled();
  });

  it("onChange param is the same value as the input value", () => {
    const handleChange = jest.fn();
    const wrapper = shallow(
      <Topbar keyword="love" handleChange={handleChange} />
    );

    const Input = wrapper.find("input");
    Input.simulate("change");
    expect(handleChange).toHaveBeenCalled();
    expect(Input.props().value).toBe("love");
  });
});
