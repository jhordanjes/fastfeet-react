import React, { useState } from 'react';

import Table from '../../components/Table';

import Modal from '../../components/Modal';
import { Container } from './styles';

export default function Dashboard() {
  const [dataModal, setDataModal] = useState({});
  const [modal, setModal] = useState(false);

  function handleView(item) {
    setDataModal(item);
    setModal(!modal);
  }

  return (
    <>
      <Container>
        <Table
          entity="orders"
          text="encomendas"
          placeholder="Buscas por encomendas"
          onView={handleView}
        />
      </Container>

      <Modal openModal={modal} setModal={setModal}>
        <div>
          <p>
            {dataModal.recipient && dataModal.recipient.street},
            {dataModal.recipient && dataModal.recipient.number}
          </p>
          <p>
            {dataModal.recipient && dataModal.recipient.city},
            {dataModal.recipient && dataModal.recipient.state}
          </p>
          <p>{dataModal.recipient && dataModal.recipient.cep}</p>
          <p>
            Complemento: {dataModal.recipient && dataModal.recipient.complement}
          </p>
        </div>
        <div>
          <strong>Datas</strong>
          <p>Retirada: {dataModal.start_dateFormatted}</p>
          <p>Entrega: {dataModal.end_dateFormatted}</p>
        </div>

        <div>
          <strong>Assinatura do destinátario</strong>
        </div>
      </Modal>
    </>
  );
}
