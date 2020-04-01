import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  margin: 10px auto;
  background: #7159c1;
  padding: 5px;
  border-radius: 4px;
  border-bottom: 3px solid ${darken(0.1, '#7159c1')};

  span {
    color: #eee;
    border-bottom: 3px solid ${darken(0.1, '#7159c1')};
    font-weight: bold;
    padding: 8px;
    font-size: 18px;
  }
  button {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    border: 0;
    &:hover {
      opacity: 0.7;
    }
    &[disabled] {
      opacity: 0.6;
      cursor: no-drop;
    }
  }
`;
