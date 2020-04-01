import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;

  & + div {
    margin-left: 5px;
  }
`;
