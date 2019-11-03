import React from "react";
import MoviesPage from "./MoviesPage";
import LoginForm from "./LoginForm";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isAuth: false
    };
  }

  updateAuth = value => {
    this.setState({
      isAuth: value
    });
  };

  render() {
    return this.state.isAuth ? (
      <MoviesPage />
    ) : (
      <LoginForm updateAuth={this.updateAuth} />
    );
  }
}