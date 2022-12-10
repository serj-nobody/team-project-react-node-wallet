import styled from 'styled-components';

export const MainButton = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: ${p => {
    if (p.type === 'submit') {
      return p.theme.buttons.primary.mb;
    } else {
      return;
    }
  }};
  border-radius: 20px;
  background-color: ${p => {
    if (p.type === 'submit') {
      return p.theme.buttons.primary.bg;
    } else {
      return p.theme.buttons.secondary.bg;
    }
  }};
  color: ${p => {
    if (p.type === 'submit') {
      return p.theme.buttons.primary.color;
    } else {
      return p.theme.buttons.secondary.color;
    }
  }};
  cursor: pointer;
  border: ${p => {
    if (p.type === 'submit') {
      return 'none';
    } else {
      return p.theme.buttons.secondary.border;
    }
  }};
`;
