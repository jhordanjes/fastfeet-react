import React from 'react';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { Container } from './styles';

export default function Modal({ children, openModal, setModal }) {
  return (
    <Container openModal={openModal}>
      <div>
        <aside>
          <span>Informações</span>
          <button onClick={() => setModal(!openModal)} type="button">
            <MdClose size={20} color="#fff" />
          </button>
        </aside>
        {children}
      </div>
    </Container>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  openModal: PropTypes.bool.isRequired,
  setModal: PropTypes.func.isRequired,
};
