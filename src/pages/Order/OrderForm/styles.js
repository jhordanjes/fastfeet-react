import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 10px auto;

  span {
    color: #fb6f91;
    font-weight: bold;
    align-self: flex-start;
    margin: 0 0 10px;
  }

  aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 20px 0px;

    button {
      margin: 5px 0 0;
      height: 40px;
      width: 150px;
      border: 0;
      color: #fff;
      border-radius: 4px;
      font-size: 14px;
      margin-left: 5px;
      text-transform: uppercase;
      transition: 0.2s;

      &:first-child {
        background: #bdbdbd;
        border-bottom: 3px solid ${darken(0.1, '#bdbdbd')};

        &:hover {
          border-bottom: 3px solid #bdbdbd;
          background: ${darken(0.1, '#bdbdbd')};
        }
      }

      &:last-child {
        background: #7159c1;
        border-bottom: 3px solid ${darken(0.1, '#7159c1')};

        &:hover {
          border-bottom: 3px solid #7159c1;
          background: ${darken(0.1, '#7159c1')};
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  background: #fff;
  padding: 15px 20px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 100%;

    >div{
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    > input,
    > div > div > input {
      padding: 7px 10px;
      border: 2px solid #e0e0e0;
      border-radius: 4px;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      min-height: 38px;
      position: relative;
      -webkit-transition: all 100ms;
      transition: all 100ms;
      box-sizing: border-box;

      &:focus {
        border: 2px solid #3f51b5;
      }
    }
  }

    label {
      text-transform: uppercase;
      font-size: 11px;
      margin-bottom: 10px;
      font-weight: bold;
      display: inline-block;
    }
  }
`;
