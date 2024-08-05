import React, { ChangeEvent } from "react";

const HOCelement = (WrappedComponent: React.ElementType) =>
  class extends React.Component {
    state = {
      showed: false,
      loginValue: "",
      emailValue: "",
      passwordValue: "",
      codeValue: "",
      edited: [false, false, false],
    };

    onIconClick = () => {
      this.setState({
        showed: !this.state.showed,
      });
    };

    onLoginChange = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState({ loginValue: e.target.value });
    };
    onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState({ emailValue: e.target.value });
    };
    onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState({ passwordValue: e.target.value });
    };

    onCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState({ codeValue: e.target.value });
    };

    onEditClick = (index: number) => {
      this.setState({
        edited: this.state.edited.map((item, i) => {
          if (i === index) {
            item = !item;
          }
          return item;
        }),
      });
    };

    render() {
      return (
        <>
          <WrappedComponent
            showed={this.state.showed}
            onIconClick={this.onIconClick}
            loginValue={this.state.loginValue}
            onLoginChange={this.onLoginChange}
            emailValue={this.state.emailValue}
            onEmailChange={this.onEmailChange}
            passwordValue={this.state.passwordValue}
            onPasswordChange={this.onPasswordChange}
            codeValue={this.state.codeValue}
            onCodeChange={this.onCodeChange}
            edited={this.state.edited}
            onEditClick={this.onEditClick}
          />
        </>
      );
    }
  };

export default HOCelement;
