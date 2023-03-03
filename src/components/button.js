import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 56px;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 4 10px rgba(0, 0, 0, 0.04);
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background: #ccc;
    cursor: default;
  }
  `;
