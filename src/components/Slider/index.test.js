import React from "react";
import { shallow } from "enzyme";
import Slider from "./";

describe("Slider", () => {
  const initProps = {
    movies: [
      {
        id: 1,
      },
    ],
  };

  it("should render correctly MovieItem when props movie avaiable", () => {
    const wrapper = shallow(<Slider {...initProps} />);

    const MovieItem = wrapper.find("MovieItem");
    expect(MovieItem).toHaveLength(initProps.movies.length);
  });
});
