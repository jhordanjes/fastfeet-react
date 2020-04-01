import React, { useEffect, useState } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import PropTypes from 'prop-types';
import { parseISO, format } from 'date-fns';
import { toast } from 'react-toastify';

import api from '../../services/api';
import history from '../../services/history';

import { CrudTable, Header } from './styles';
import Item from './Item';
import Pagination from '../Pagination';
import entities from '../../util/entities';

export default function Table({ onView, entity, text, placeholder }) {
  const { columns } = entities[entity];
  const [name, setName] = useState('');
  const [pagination, setPagination] = useState({});
  const [orders, setOrders] = useState([]);

  async function loadOrder(page = 1) {
    try {
      const { data } = await api.get(`${entity}`, {
        params: {
          page,
          name,
        },
      });

      const itens = data.orders.rows.map(order => {
        if (order.canceled_at)
          return {
            ...order,
            canceled_dateFormatted: format(
              parseISO(order.canceled_at),
              'dd/MM/yyyy'
            ),
            status: {
              text: 'CANCELADO',
              color: '#b71c1c',
            },
          };
        if (!order.start_date)
          return {
            ...order,
            status: {
              text: 'PENDENTE',
              color: '#f57f17',
            },
          };
        if (order.start_date && order.end_date)
          return {
            ...order,
            start_dateFormatted: format(
              parseISO(order.start_date),
              'dd/MM/yyyy'
            ),
            end_dateFormatted: format(parseISO(order.end_date), 'dd/MM/yyyy'),
            status: {
              text: 'ENTREGUE',
              color: '#4caf50',
            },
          };
        if (order.start_date && !order.end_date)
          return {
            ...order,
            start_dateFormatted: format(
              parseISO(order.start_date),
              'dd/MM/yyyy'
            ),
            status: {
              text: 'RETIRADA',
              color: '#0d47a1',
            },
          };
        return order;
      });
      setOrders(itens);
      setPagination({
        page,
        limit: data.limit,
        total: data.orders.count,
      });
    } catch (error) {
      toast.error('Error Interno.');
    }
  }

  async function handleDelete(id) {
    const confirm = window.confirm('Você tem certeza que deseja deletar isso?');

    if (!confirm) {
      toast.error('Encomenda não apagada!');
      return;
    }

    try {
      await api.delete(`/${entity}/${id}`);
      loadOrder();
      toast.success('Encomenda apagada com sucesso!');
    } catch (err) {
      toast.error('Essa encomenda não pode ser deletada!');
    }
  }

  useEffect(() => {
    loadOrder();
  }, [name]);

  return (
    <>
      <Header>
        <h2>Gerenciando {text}</h2>
        <div>
          <div>
            <MdSearch size={20} color="#aaa" />
            <input
              name="name"
              onChange={e => setName(e.target.value)}
              placeholder={placeholder}
            />
          </div>

          <button type="button" onClick={() => history.push(`/${entity}/new`)}>
            <MdAdd /> CADASTRAR
          </button>
        </div>
      </Header>

      <CrudTable>
        <thead>
          <tr>
            {columns.map(({ id, label }) => (
              <th key={id}>{label}</th>
            ))}
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(order => (
            <Item
              entity={entity}
              key={order.id}
              columns={columns}
              data={order}
              onDelete={handleDelete}
              onView={onView}
            />
          ))}
        </tbody>
      </CrudTable>
      <Pagination onPageChange={loadOrder} pagination={pagination} />
    </>
  );
}

Table.propTypes = {
  entity: PropTypes.string.isRequired,
  onView: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
