import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MdMoreHoriz, MdRemoveRedEye, MdEdit, MdDelete } from 'react-icons/md';
import history from '../../../services/history';
import { TableItem, Badge, ActionsList, Container } from './styles';
import RenderItem from './renders';

export default function Item({ data, onDelete, onView, columns, entity }) {
  const [visible, setVisible] = useState(false);
  const menuRef = useRef();

  function handleToggleVisible() {
    setVisible(!visible);
  }

  useEffect(() => {
    function handleClickOverlay(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setVisible(false);
      }
    }

    function handleKeyDown(event) {
      if (event.keyCode === 27) {
        setVisible(false);
      }
    }

    if (visible) {
      document.addEventListener('mousedown', handleClickOverlay);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOverlay);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, setVisible]);

  return (
    <>
      <TableItem>
        {columns.map(column => (
          <td key={column.id}>
            <RenderItem data={data} column={column} />
          </td>
        ))}

        <td>
          <Container>
            <Badge onClick={handleToggleVisible}>
              <MdMoreHoriz size={20} color="#9e9e9e" />
            </Badge>

            <ActionsList ref={menuRef} visible={visible}>
              <li>
                <Badge onClick={() => onView(data)}>
                  <MdRemoveRedEye color="#7159c1" /> Visualizar
                </Badge>
              </li>
              <li>
                <Badge
                  onClick={() => history.push(`/${entity}/edit/${data.id}`)}
                  type="button"
                >
                  <MdEdit color="#2196f3" /> Editar
                </Badge>
              </li>
              <li>
                <Badge onClick={() => onDelete(data.id)} type="button">
                  <MdDelete color="#f44336" /> Excluir
                </Badge>
              </li>
            </ActionsList>
          </Container>
        </td>
      </TableItem>
    </>
  );
}

Item.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onView: PropTypes.func.isRequired,
  entity: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.shape({
    product: PropTypes.string,
    id: PropTypes.number,
    start_dateFormatted: PropTypes.string,
    end_dateFormatted: PropTypes.string,
    recipient: PropTypes.shape({
      name: PropTypes.string,
      street: PropTypes.string,
      number: PropTypes.number,
      city: PropTypes.string,
      state: PropTypes.string,
      cep: PropTypes.string,
      complement: PropTypes.string,
    }),
    deliveryman: PropTypes.shape({
      name: PropTypes.string,
    }),
    status: PropTypes.object,
    signature: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};
