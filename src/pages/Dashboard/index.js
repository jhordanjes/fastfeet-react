import React from 'react';
import { MdLens, MdAdd } from 'react-icons/md';
import Actions from '../../components/Actions';
import { Container, Table } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <h2>Gerenciando encomendas</h2>
      <header>
        <input name="name" placeholder="Buscar por encomendass" />

        <button type="button">
          <MdAdd /> CADASTRAR
        </button>
      </header>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>#01</td>
            <td>Jhordan Jessé Oliveira</td>
            <td>Gabriel Iannuzzi</td>
            <td>Manaus</td>
            <td>Amazonas</td>
            <td>
              <span>
                <MdLens /> ENTREGUE
              </span>
            </td>
            <td>
              <Actions />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Jhordan Jessé Oliveira</td>
            <td>
              <span>GI</span>Gabriel Iannuzzi
            </td>
            <td>Manaus</td>
            <td>Amazonas</td>
            <td>Entregue</td>
            <td>
              <Actions />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Jhordan Jessé Oliveira</td>
            <td>Gabriel Iannuzzi</td>
            <td>Manaus</td>
            <td>Amazonas</td>
            <td>Entregue</td>
            <td>
              <Actions />
            </td>
          </tr>
          <tr>
            <td>#01</td>
            <td>Jhordan Jessé Oliveira</td>
            <td>Gabriel Iannuzzi</td>
            <td>Manaus</td>
            <td>Amazonas</td>
            <td>Entregue</td>
            <td>
              <Actions />
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
