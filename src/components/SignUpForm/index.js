import React from "react";
import styled, { css } from "styled-components";

export default class SignUpForm extends React.Component {
  state = {
    name: "",
    surname: "",
    email: "",
    dateOfBirth: "",
    gender: "female"
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, surname, email, dateOfBirth, gender } = this.state;
    return (
      <>
        <Wrapper>
          <InputWrapper>
            <Label htmlFor="name">Name</Label>
            <Input
              value={name}
              placeholder=""
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
              autocomplete="new-password"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="surname">Surname</Label>
            <Input
              value={surname}
              placeholder=""
              type="text"
              name="surname"
              id="surname"
              onChange={this.handleChange}
              autocomplete="new-password"
            />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              placeholder=""
              type="text"
              name="email"
              id="email"
              onChange={this.handleChange}
              autocomplete="new-password"
            />
          </InputWrapper>

          <InputWrapper>
            <Label htmlFor="dateOfBirth">Date of birth</Label>
            <DateOfBirth
              value={dateOfBirth}
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              onChange={() => console.log("")}
            />
          </InputWrapper>

          <InputWrapper radiobtn>
            <Label htmlFor="male">
              Male
              <RadioBtn
                type="radio"
                value={gender}
                name="male"
                id="male"
                onChange={() => console.log("")}
              />
            </Label>
            <Label htmlFor="female">
              Female
              <RadioBtn
                type="radio"
                value="gender"
                name="female"
                id="female"
                onChange={() => console.log("")}
              />
            </Label>
          </InputWrapper>

          <Label htmlFor="select">
            <Select id="select" onChange={() => console.log("")}>
              <Option value="single">Single</Option>
              <Option value="maried">Maried</Option>
            </Select>
          </Label>
        </Wrapper>
        <SubmitBtn>Submit</SubmitBtn>
      </>
    );
  }
}

const Wrapper = styled.form`
  width: 100%;
  height: 90%;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #d3d3d3;
  flex-shrink: 0;

  ${props =>
    props.radiobtn &&
    css`
      border: none;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    `}
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: white;
  font-size: 2rem;
`;

const DateOfBirth = styled.input`
  border: none;
  color: #7d7d7d;
  font-size: 1.6rem;
  width: 100%;
  border: none;
  outline: none;
`;

const RadioBtn = styled.input`
  margin-left: 1rem;
`;

const Label = styled.label`
  text-align: center;
  color: white;
`;

const Select = styled.select``;

const Option = styled.option``;

const SubmitBtn = styled.button`
  height: 3.2rem;
  width: 13rem;
  background-color: #ecff34;
  color: gray;
  outline: none;
  border: none;
  border-radius: 2px;
  box-shadow: 0 1px 2px grey;
  cursor: pointer;
  margin: 0 auto;
  display: block;
`;
