import React, { Component } from 'react';
import { login } from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      redirectToReferrer: false,
    };

    this.login = this.login.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
  }

  login() {
    const { username } = this.state;
    this.props.login(username);
    this.setState({ redirectToReferrer: true });
  }

  handleUsername(e) {
    const { value } = e.target;
    this.setState({ username: value });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page</p>

        <label htmlFor="username" />
        <input id="username" type="text" name="username" onChange={this.handleUsername} />

        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username) => {
      return dispatch(login(username));
    },
  };
};

Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

export default Login;
