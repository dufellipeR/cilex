import styled from 'styled-components';
import { shade, opacify } from 'polished';

export const Container = styled.button`
  background: rgba(0, 0, 0, 0);
  height: 56px;
  border-radius: 10px;
  border: 0px solid #232129;
  padding: 0 16px;
  width: 100%;
  color: #ff8700;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;
  /* box-shadow: 2px 4px #000; */
  letter-spacing: 0.3px;
  line-height: 1;
  border: 1px solid #ff8700;

  span {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    line-height: 1.2;
  }
`;
