import styled, { keyframes } from 'styled-components';

const upAnimate = keyframes`
  from {
    opacity: 0;
    transform: translateY(-200px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: ${props => (props.openModal ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  > div {
    background-color: #fefefe;
    margin: 120px auto;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    width: 430px;
    animation: ${upAnimate} 200ms ease forwards;

    aside {
      background: #7159c1;
      padding: 15px 25px;
      color: #fff;
      font-weight: bold;
      text-transform: uppercase;
      width: 100%;
      display: flex;
      justify-content: space-between;
      justify-items: center;

      button {
        border: 0;
        background: none;
      }
    }

    p {
      padding-top: 10px;
    }

    div {
      padding: 10px 20px;
      & + div {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 2px solid #eee;
      }
    }
  }
`;
