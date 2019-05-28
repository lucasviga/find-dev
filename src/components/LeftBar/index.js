import React from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as UserActions } from "../../store/ducks/users";

import "./styles.css";

const LeftBar = ({ users }) => (
  <div className="left-bar">
    <h1>List of Users</h1>
    <ul>
      {users.data.map(user => (
        <li key={user.id}>
          <img src={user.avatar} alt={user.name} height={120} />
          <h1>{user.name}</h1>
          <h2>{user.login}</h2>
        </li>
      ))}
    </ul>
  </div>
);

LeftBar.propTypes = {
  users: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftBar);
