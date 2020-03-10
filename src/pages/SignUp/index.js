import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '../../assets/fastfeet.png';
import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
  name: Yup.string().required('O campo nome é obrigatório'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="FasFeet" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="name">Nome completo</label>
        <Input name="name" id="name" placeholder="João da Silva" />
        <label htmlFor="email">Seu Email</label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
        />
        <label htmlFor="password">Sua senha</label>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="******"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
