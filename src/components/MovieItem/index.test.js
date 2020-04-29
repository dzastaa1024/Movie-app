import React from "react";
import { shallow } from "enzyme";
import MovieItem from "./";

describe("MovieItem", () => {
  const initProps = {
    movie: {
      poster_path: "",
      title: "Agata",
      release_date: "20/03/2000",
      vote_average: 2,
    },
  };

  it("should call handleClick with movie onClick on Item", () => {
    const handleClick = jest.fn();
    const wrapper = shallow(
      <MovieItem {...initProps} handleClick={handleClick} />
    );
    const Item = wrapper.find("Item");

    Item.simulate("click");

    expect(handleClick).toHaveBeenCalledWith(initProps.movie);
  });

  it("should render ReleaseDate if sidebarNews is passed", () => {
    const wrapper = shallow(<MovieItem {...initProps} sidebarNews={true} />);
    const ReleaseDate = wrapper.find("ReleaseDate");

    expect(ReleaseDate).toHaveLength(1);
  });

  it("should not render ReleaseDate if sidebarNews is not passed and render Average", () => {
    const wrapper = shallow(<MovieItem {...initProps} sidebarNews={false} />);
    const ReleaseDate = wrapper.find("ReleaseDate");
    const Average = wrapper.find("Average");

    expect(ReleaseDate).toHaveLength(0);
    expect(Average).toHaveLength(1);
  });
});
