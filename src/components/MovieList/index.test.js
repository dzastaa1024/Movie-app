import React from "react";
import { shallow } from "enzyme";
import MovieList from "./";

describe("MovieList", () => {
  const initProps = {
    allMovies: [
      {
        poster_path: "",
        title: "Agata",
        release_date: "20/03/2000",
        vote_average: 10,
      },
      {
        poster_path: "",
        title: "Justyna",
        release_date: "20/03/2000",
        vote_average: 100,
      },
    ],
  };

  it("should render correctly MovieItem when allMovies avaiable", () => {
    const wrapper = shallow(<MovieList {...initProps} />);

    const MovieItem = wrapper.find("MovieItem");
    expect(MovieItem).toHaveLength(initProps.allMovies.length);
  });

  it("should not render Button on sidebarNews", () => {
    const wrapper = shallow(<MovieList {...initProps} sidebarNews />);

    const Button = wrapper.find("Button");
    expect(Button).toHaveLength(0);
  });
  it("should render Button not on sidebarNews", () => {
    const wrapper = shallow(<MovieList {...initProps} />);

    const Button = wrapper.find("Button");
    expect(Button).toHaveLength(1);
  });
});
