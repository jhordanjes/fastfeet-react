import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 150px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: #9e9e9e;
      padding-left: 20px;
      text-transform: uppercase;

      &:hover {
        color: #424242;
      }
    }
  }

  aside {
    align-items: center;
    display: flex;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;

  div {
    text-align: right;

    strong {
      display: block;
      color: #333;
    }

    span {
      display: block;
      margin-top: 2px;
      color: #fb6f91;
      transition: 0.2s;

      &:hover {
        color: #fa5558;
      }
    }
  }
`;
