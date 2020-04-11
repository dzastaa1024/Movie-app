import React from "react";
import styled from "styled-components";
import * as fetcher from "../../fetcher";

export default class SidebarFilters extends React.Component {
  state = {
    genres: []
  };

  async componentDidMount() {
    const res = await fetcher.fetchGenre();
    console.log(("moj res", res));
    this.setState({
      genres: res
    });
  }

  render() {
    const { genres } = this.state;
    const { handleFilter, activeFilters, checked } = this.props;
    return (
      <Wrapper>
        <Title>Genres</Title>
        <List>
          {genres.map(genre => (
            <Genre key={genre.id}>
              <Label>
                <CheckboxContainer>
                  <HiddenCheckbox
                    checked={activeFilters.includes(genre.id)}
                    onChange={() => handleFilter(genre.id)}
                    type="checkbox"
                  />
                  <StyledCheckbox checked={activeFilters.includes(genre.id)}>
                    <Icon viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </Icon>
                  </StyledCheckbox>
                </CheckboxContainer>
                {genre.name}
              </Label>
            </Genre>
          ))}
        </List>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  border: 1px solid black;
  background-color: black;
  width: 20rem;
  position: fixed;
  top: 10rem;
  bottom: 0;
  left: 0;
`;

const List = styled.ul`
  padding: 1rem;
`;

const Genre = styled.li`
  cursor: pointer;
  padding: 0.5rem;
`;

const Title = styled.h2`
  padding: 1.5rem;
`;

const Icon = styled.svg`
  fill: none;
  stroke: black;
  stroke-width: 2px;
`;

const CheckboxContainer = styled.div`
  margin-right: 0.5rem;

  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 14px;
  height: 14px;
  background: ${props => (props.checked ? "#e2f720" : "#302e44")};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px #fcffe0;
  }

  ${Icon} {
    visibility: ${props => (props.checked ? "visible" : "hidden")};
  }
`;

const Label = styled.label`
  width: 100%;
  height: 100%;
`;
