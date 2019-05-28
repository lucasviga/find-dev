import React, { Component } from "react";
import PropTypes from "prop-types";

import Modal from "react-modal";

//conecta o component com alguma info do redux
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as ModalActions } from "../../store/ducks/modal";
import { Creators as UsersActions } from "../../store/ducks/users";

import "./styles.css";

Modal.setAppElement(document.getElementById("root"));

class AddUser extends Component {
  static propTypes = {
    modal: PropTypes.shape({
      visible: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
      cordinates: PropTypes.oneOfType([
        PropTypes.oneOf([null]),
        PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number
        })
      ])
    }).isRequired,
    hideModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired
  };

  state = {
    userInput: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { loading } = this.props;

    if (loading) return;

    const { userInput } = this.state;

    if (!userInput) return;

    const {
      addUserRequest,
      modal: { cordinates }
    } = this.props;

    addUserRequest(userInput, cordinates);
    this.setState({ userInput: "" });
  };

  handleHideModal = () => {
    const { hideModal } = this.props;
    hideModal();
    this.setState({ userInput: "" });
  };

  render() {
    const { modal } = this.props;
    const { userInput } = this.state;
    return (
      <Modal
        isOpen={modal.visible}
        onRequestClose={this.handleHideModal}
        contentLabel="Add user Modal"
        className="modal-container"
        overlayClassName="modal-overlay"
      >
        <h2>Adicionar novo dev</h2>

        <form onSubmit={this.handleFormSubmit} className="form">
          <input
            placeholder="user do github"
            value={userInput}
            onChange={e => this.setState({ userInput: e.target.value })}
          />
          <div className="container-button">
            <button type="button" onClick={this.handleHideModal}>
              Cancelar
            </button>
            <button type="submit">Adicionar</button>
          </div>
        </form>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ModalActions, ...UsersActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
