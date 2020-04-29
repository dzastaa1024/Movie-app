import React from "react";
import { shallow } from "enzyme";
import Button from "./index";

describe("Button", () => {
  it("check if handleLoadMore is called", () => {
    const handleLoadMore = jest.fn();
    const wrapper = shallow(<Button handleLoadMore={handleLoadMore} />);

    console.log(wrapper.debug());
    const LoadBtn = wrapper.find("LoadBtn");

    LoadBtn.simulate("click");

    expect(handleLoadMore).toHaveBeenCalled();
  });
});
