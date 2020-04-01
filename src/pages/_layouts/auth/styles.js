import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ce93d8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 320px;
  text-align: center;
  background: #fff;
  padding: 30px 20px;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      text-align: left;
      text-transform: uppercase;
      font-size: 11px;
      margin-bottom: 10px;
      font-weight: bold;
    }

    input {
      margin: 0 0 15px;
      border: 2px solid #e0e0e0;
      border-radius: 4px;
      height: 45px;
      padding: 0 15px;

      &:focus {
        border: 2px solid #3f51b5;
      }
    }

    span {
      color: #fb6f91;
      font-weight: bold;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 45px;
      background: #7159c1;
      border: 0;
      border-bottom: 3px solid ${darken(0.1, '#7159c1')};
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      transition: 0.2s;

      &:hover {
        border-bottom: 3px solid #7159c1;
        background: ${darken(0.1, '#7159c1')};
      }
    }

    a {
      color: #7159c1;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
