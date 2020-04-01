import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

import history from '../../../services/history';
import api from '../../../services/api';
import ReactSelect from '../../../components/ReactSelect';
import { Container, Content } from './styles';

const schema = Yup.object().shape({
  recipient_id: Yup.number()
    .required('Campo é obrigatorio')
    .typeError('Selecione o campo'),
  deliveryman_id: Yup.number()
    .required()
    .typeError('Selecione o campo'),
  product: Yup.string().required('O nome do produto é obrigatório'),
});

export default function OrderForm({ match }) {
  const { id } = match.params;
  const [initialData, setInitialData] = useState({});

  async function handleSubmit(data) {
    try {
      id // eslint-disable-line
        ? await api.put(`/orders/${id}`, data)
        : await api.post(`/orders`, data);

      toast.success('Encomenda salva com sucesso');
      history.push(`/orders`);
    } catch (error) {
      toast.error('Error ao salvar, verifique suas permissões');
    }
  }

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await api.get(`/orders/${id}`);
        setInitialData(data);
      } catch (error) {
        toast.error(
          'Error ao buscar item para editar, verifique suas permissões'
        );
        history.push(`/orders`);
      }
    }
    if (id) getData();
  }, [id]);

  return (
    <Container>
      <aside>
        <h2>Cadastro de encomendas</h2>
        <div>
          <button type="button" onClick={() => history.push('/orders')}>
            <MdKeyboardArrowLeft /> Voltar
          </button>

          <button type="submit" form="order">
            <MdDone /> SALVAR
          </button>
        </div>
      </aside>
      <Content>
        <Form
          schema={schema}
          initialData={initialData}
          onSubmit={handleSubmit}
          id="order"
        >
          <div>
            <ReactSelect
              label="Destinatario"
              name="recipient_id"
              entity="recipients"
              placeholder="Ludwig van Beethoven"
              required
            />

            <ReactSelect
              label="Entregador"
              name="deliveryman_id"
              entity="deliverymans"
              placeholder="Ludwig van Beethoven"
              required
            />
          </div>

          <label htmlFor="product">Nome do produto</label>
          <Input id="product" name="product" placeholder="Yamaha SX7" />
        </Form>
      </Content>
    </Container>
  );
}
