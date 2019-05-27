import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal from "react-modal";

//conecta o component com alguma info do redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../../store/actions/users";

Modal.setAppElement(document.getElementById("root"));

class AddUser extends Component {
  static propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    users: PropTypes.shape({
      loadgin: PropTypes.bool,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string
        })
      )
    }).isRequired
  };

  state = {
    userInput: ""
  };

  handleAddUser = event => {
    event.preventDefault();
    this.props.addUserRequest(this.state.userInput);
    this.setState({ userInput: "" });
  };

  handleFormSubmit = e => {};

  handleHideModal = () => {};

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddUser}>
          <input
            placeholder="user do github"
            value={this.state.userInput}
            onChange={e => this.setState({ userInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
          {this.props.users.loading && <span>carregando...</span>}
        </form>

        {this.props.users.error && <span>{this.props.users.error}</span>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
