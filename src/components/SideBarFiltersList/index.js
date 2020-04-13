import React from "react";
import styled from "styled-components";
import Scroll from "../../Scroll";

const SideBarFiltersList = ({
  filters,
  handleFilter,
  activeFilters,
  heading,
  filterType,
}) => {
  return (
    <Wrapper>
      <Title>{heading}</Title>
      <Scroll>
        <List>
          {filters.map((filter) => (
            <Genre key={filter.id}>
              <Label>
                <CheckboxContainer>
                  <HiddenCheckbox
                    checked={activeFilters.includes(filter.id)}
                    onChange={() => handleFilter(filter.id, filterType)}
                    type="checkbox"
                  />
                  <StyledCheckbox checked={activeFilters.includes(filter.id)}>
                    <Icon viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </Icon>
                  </StyledCheckbox>
                </CheckboxContainer>
                {filter.name}
              </Label>
            </Genre>
          ))}
        </List>
      </Scroll>
    </Wrapper>
  );
};

export default SideBarFiltersList;

const Wrapper = styled.div`
  padding: 2rem;
  color: #d4d4d4;
  font-size: 1.3rem;
  height: 50%;
  overflow: hidden;
`;

const List = styled.ul`
  cursor: pointer;
  padding: 0.5rem;
`;

const Genre = styled.li`
  cursor: pointer;
  padding: 0.5rem;
`;

const Title = styled.h2`
  padding-bottom: 2rem;
  color: #d4d4d4;
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
  background: ${(props) => (props.checked ? "#e2f720" : "#302e44")};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 1px #fcffe0;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const Label = styled.label`
  width: 100%;
  height: 100%;
`;
