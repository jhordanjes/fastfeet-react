import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.openModal ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  background-color: #fefefe;
  margin: 150px auto;
  padding: 20px;
  border: 1px solid #888;
  width: 400px;
  border-radius: 4px;

  p {
    padding-top: 10px;
  }

  div {
    & + div {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 2px solid #eee;
    }
  }
`;
