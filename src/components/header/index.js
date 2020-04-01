import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../store/modules/auth/actions';
import logo from '../../assets/fastfeet.png';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }

  const profile = useSelector(state => state.user.profile);
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fasfeet" />
          <NavLink to="/orders" activeClassName="selected">
            Encomendas
          </NavLink>
          <NavLink to="/dashboard" activeClassName="selected">
            Entregadores
          </NavLink>
          <NavLink to="/dashboard" activeClassName="selected">
            Destinatários
          </NavLink>
          <NavLink to="/dashboard" activeClassName="selected">
            Problemas
          </NavLink>
        </nav>
        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            <button type="submit" onClick={handleSignOut}>
              Sair do Fastfeet
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
