import styled from 'styled-components';

export const DashWrapper = styled.div`
  width: 240px;
  height: 46px;
  border: 1px solid #000000;
  border-radius: 2px;
  box-sizing: border-box;
  padding: 5px;
`;

export const Result = styled.div<{error?: boolean}>`
  text-align: right;
  ${({error}) => error && 'color: red;'}
`;