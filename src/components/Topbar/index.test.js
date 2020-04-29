import React from "react";
import { shallow } from "enzyme";
import Topbar from "./";

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
    expect(Input.props().value).toBe("love");
  });
});
