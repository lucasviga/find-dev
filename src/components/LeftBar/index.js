import React from "react";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as UserActions } from "../../store/ducks/users";

import "./styles.css";

const LeftBar = ({ users, removeUser }) => (
  <div className="left-bar">
    {!users.data.length && <span>Nenhum usuário foi adicionado</span>}
    <ul>
      {users.data.map(user => (
        <li key={user.id}>
          <div>
            <img src={user.avatar} alt={user.name} />
            <div className="user-info">
              <h1>{user.name}</h1>
              <h2>{user.login}</h2>
            </div>
            <button type="button" onClick={() => removeUser(user)}>
              <i className="fa fa-fw fa-times-circle remove" />
            </button>

            <a
              href={`https://github.com/${user.login}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-fw fa-angle-right go-to-page" />
            </a>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

LeftBar.propTypes = {
  users: PropTypes.shape({}).isRequired,
  removeUser: PropTypes.func.isRequired
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
