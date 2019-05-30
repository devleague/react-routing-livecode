import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions';
import { connect } from 'react-redux';
import './Header.css';

const _Header = (props) => {
  return (
    <div className="header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Users</Link>
        </li>
        <li>
          <Link to="/contact/5">Contact</Link>
        </li>
        <li>
          <Link to="/protected">Protected</Link>
        </li>
        {props.loggedIn ? (
          <li>
            <button onClick={props.logout}>Logout</button>
          </li>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      return dispatch(logout());
    },
  };
};

const Header = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_Header);

export default Header;
