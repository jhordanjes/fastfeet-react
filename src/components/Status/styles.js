import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.span`
  display: inline-block;
  font-weight: bold;
  font-size: 12px;
  padding: 7px;
  border-radius: 15px;
  align-items: center;
  color: ${props => props.color};
  background: ${props => props.color && lighten(0.4, props.color)};
`;
