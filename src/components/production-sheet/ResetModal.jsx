import React from "react";
import Modal from "react-modal";
import styled from "styled-components";

import TextButton from "../common/TextButton";

const modalStyles = {
  content: {
    width: '200px',
    height: '65px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ModalContent = styled.div`
  font-size: 18px;
  letter-spacing: 0.75px;
  font-style: italic;
  font-weight: 700;
  text-align: center;

  .buttons-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
`;

class ResetModal extends React.Component {
  render() {
    const {
      isOpen,
      onNoClick,
      onYesClick,
    } = this.props;
    return (
      <Modal
        isOpen={ isOpen }
        style={ modalStyles }
      >
        <ModalContent>
          Are you sure?
          <div className="buttons-wrapper">
            <TextButton text="No" type="no" onClick={ onNoClick } />
            <TextButton text="Yes" type="yes" onClick={ onYesClick } />
          </div>
        </ModalContent>
      </Modal>
    );
  }
}

export default ResetModal;