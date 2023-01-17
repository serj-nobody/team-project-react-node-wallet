import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 20px;
  right: 0px;
  background-color: ${props => props.theme.buttons.primary.bg};
  width: 44px;
  height: 44px;
  border-radius: 50%;
  outline: none;
  border: none;
  color: ${props => props.theme.buttons.primary.color};
  font-size: 20px;
  scale: 1;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);

  cursor: pointer;
  :hover {
    scale: 1.2;
    transition: scale 150ms linear;
  }

  @media (min-width: 768px) {
    bottom: 20px;
    right: 20px;
  }

  @media (min-width: 1280px) {
    bottom: 20px;
    right: 20px;
  }
`;
