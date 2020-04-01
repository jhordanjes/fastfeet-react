import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 1100px;
  margin: 50px auto auto auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1em;

  thead th {
    color: #212121;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    color: #757575;
  }
`;

export const Item = styled.tr`
  background: #fff;

  td span {
    font-weight: bold;
    font-size: 12px;
    padding: 7px;
    border-radius: 15px;
    align-items: center;
    color: ${props => props.color};
    background: ${props => props.color && lighten(0.4, props.color)};
  }
`;
