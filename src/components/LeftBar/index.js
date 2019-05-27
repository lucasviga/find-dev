import React, { Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../../store/actions/users";

const LeftBar = props => (
  <Fragment>
    <h1>List of Users</h1>

    <ul>
      {props.users.data.map(user => (
        <li key={user.id}>
          <img src={user.avatar} alt={user.name} height={120} />
          <p>{user.name}</p>
          <p>{user.login}</p>
        </li>
      ))}
    </ul>
  </Fragment>
);

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftBar);
