import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const ActionsList = styled.ul`
  position: absolute;
  background: #fff;
  top: 30px;
  width: 150px;
  left: calc(50% - 80px);
  border: 1px solid #eee;
  border-radius: 4px;
  display: ${props => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: 30px;
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #eee;
  }

  li {
    padding: 10px 10px;

    & + li {
      border-top: 1px solid #eee;
    }
  }
`;
