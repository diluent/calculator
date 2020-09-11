import styled from 'styled-components';

export const ButtonElement = styled.button<{horisontal: number; vertical: number}>`
  width: ${({horisontal}) => horisontal * 60}px;
  height: ${({vertical}) => vertical * 40}px;
`;
