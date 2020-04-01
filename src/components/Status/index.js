import React from 'react';
import { MdLens } from 'react-icons/md';
import { Container } from './styles';

export default function Status({ status, color }) {
  return (
    <Container color={color}>
      <MdLens /> {status}
    </Container>
  );
}
