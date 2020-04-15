import React from "react";
import styled, { css } from "styled-components";

export default class SignUpForm extends React.Component {
  state = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "female",
    errors: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      errors: [],
    });
  };

  isFormValid = () => {
    const errors = [];

    if (this.isFieldEmpty()) {
      errors.push({ message: "Fill in the empty fields. " });
    }

    if (this.isEmailValid()) {
      errors.push({ message: "Your email is incorrect" });
    }

    if (this.isPhoneValid()) {
      errors.push({
        message:
          "Your phone is incorrect. Must contain at least 4 characters but no more than 12 characters. ",
      });
    }

    if (errors.length) {
      this.setState({
        errors: errors,
      });
      return;
    }
    return true;
  };

  isFieldEmpty = () => {
    const { name, surname, email, phone, dateOfBirth, gender } = this.state;
    return (
      !name.length ||
      !surname.length ||
      !email.length ||
      !phone.length ||
      !dateOfBirth.length ||
      !gender.length
    );
  };

  isEmailValid = () => {
    return !this.state.email.includes("@");
  };

  isPhoneValid = () => {
    return this.state.phone.length < 4 || this.state.phone.length > 12;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const isValid = this.isFormValid();

    if (!isValid) {
      return;
    }
  };

  render() {
    const {
      name,
      surname,
      email,
      phone,
      dateOfBirth,
      gender,
      errors,
    } = this.state;
    return (
      <>
        <Wrapper onSubmit={this.handleSubmit}>
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

          <InputWrapper>
            <Label htmlFor="phone">Phone</Label>
            <DateOfBirth
              value={phone}
              type="phone"
              name="phone"
              id="phone"
              onChange={this.handleChange}
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
          <SubmitBtn>Submit</SubmitBtn>
        </Wrapper>
        {errors.length > 0 &&
          errors.map((error) => (
            <NameOfError key={error.message}> {error.message}</NameOfError>
          ))}
      </>
    );
  }
}

const Wrapper = styled.form`
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(24rem, 3fr));
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;

  height: calc(100% - 1 * 100px);
  padding: 2rem;
  background-color: #18171f;
  margin-left: 20rem;
  margin-top: 10rem;
  border-top-left-radius: 40px;
  width: calc(100% - 2 * 200px);
`;

const InputWrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #d3d3d3;
  flex-shrink: 0;

  ${(props) =>
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

  position: absolute;
  bottom: 3%;
  left: 44%;
`;

const NameOfError = styled.p``;
