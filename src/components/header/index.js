import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/fastfeet.png';
import { Container, Content, Profile } from './styles';

export default function header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fasfeet" />
          <Link to="/dashboard">Encomendas</Link>
          <Link to="/dashboard">Entregadores</Link>
          <Link to="/dashboard">Destinatários</Link>
          <Link to="/dashboard">Problemas</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Jhordan Jessé</strong>
              <span>Sair do Sistema</span>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
