import React from 'react';

import { Container, Content } from './styles';

export default function Modal({ openModal }) {
  return (
    <Container openModal={openModal}>
      <Content>
        <div>
          <strong>Informações da encomenda</strong>
          <p>Rua Largo do Prata, 175</p>
          <p>Manaus, Am</p>
          <p>69190000</p>
        </div>
        <div>
          <strong>Datas</strong>
          <p>Retirada: 25/01/2020</p>
          <p>Entrega: 15/03/2020</p>
        </div>
        <div>
          <strong>Assinatura do destinátario</strong>
        </div>
      </Content>
    </Container>
  );
}
