import React, { useState } from 'react';
import { MdMoreHoriz, MdRemoveRedEye, MdEdit, MdDelete } from 'react-icons/md';
import { Container, Badge, ActionsList } from './styles';
import Modal from '../Modal';

export default function Actions() {
  const [visible, setVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  function handleModalVisible() {
    setOpenModal(!openModal);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz size={20} color="#9e9e9e" />
      </Badge>

      <ActionsList visible={visible}>
        <li>
          <Badge onClick={handleModalVisible}>
            <MdRemoveRedEye color="#7159c1" /> Visualizar
          </Badge>
        </li>
        <li>
          <Badge>
            <MdEdit color="#2196f3" /> Editar
          </Badge>
        </li>
        <li>
          <Badge>
            <MdDelete color="#f44336" /> Excluir
          </Badge>
        </li>
      </ActionsList>
      <Modal openModal={openModal} />
    </Container>
  );
}
