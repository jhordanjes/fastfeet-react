import styled, { keyframes } from 'styled-components';

const upAnimate = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const TableItem = styled.tr`
  background: #fff;

  td p {
    display: inline-block;
  }
`;

export const Badge = styled.button`
  background: none;
  border: 0;
`;

export const ActionsList = styled.ul`
  position: absolute;
  background: #fff;
  top: 30px;
  width: 150px;
  left: calc(50% - 60px);
  border: 1px solid #eee;
  border-radius: 4px;
  display: ${props => (props.visible ? 'block' : 'none')};
  animation: ${upAnimate} 300ms ease forwards;

  &::before {
    content: '';
    position: absolute;
    left: 30px;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgba(1, 1, 1, 0.1);
  }

  li {
    padding: 10px 10px;

    & + li {
      border-top: 1px solid #eee;
    }
  }
`;

export const Container = styled.div`
  position: relative;
`;
