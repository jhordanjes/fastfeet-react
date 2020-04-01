import styled from 'styled-components';
import { darken } from 'polished';

export const Header = styled.div`
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    > div {
      width: 230px;
      display: flex;
      align-items: center;
      cursor: pointer;
      position: relative;

      svg {
        position: absolute;
        margin-left: 8px;
        margin-top: -7px;
      }

      input {
        margin: 0 0 15px;
        border: 2px solid #e0e0e0;
        border-radius: 4px;
        height: 45px;
        width: 100%;
        text-indent: 15px;

        padding: 0 15px;

        &:focus {
          border: 2px solid #7159c1;
        }
      }
    }
  }

  button {
    margin: 5px 0 0;
    height: 40px;
    width: 150px;
    background: #7159c1;
    border: 0;
    border-bottom: 3px solid ${darken(0.1, '#7159c1')};
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    transition: 0.2s;
    align-items: center;

    &:hover {
      border-bottom: 3px solid #7159c1;
      background: ${darken(0.1, '#7159c1')};
    }
  }
`;

export const CrudTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1em;

  thead th {
    color: #212121;
    text-align: left;
    padding: 12px;
  }

  tbody tr {
    transition: 0.3s;

    &:hover {
      background: #f5f5f5;
    }
  }

  tbody td {
    padding: 12px;
    color: #757575;
  }
`;

export const Item = styled.tr``;
