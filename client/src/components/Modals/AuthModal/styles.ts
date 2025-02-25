import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 16px;
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
  background: ${({ $isActive }) => ($isActive ? '#007bff' : '#ccc')};
  color: #fff;
  border: none;
  padding: 10px;
  flex: 1;
  cursor: pointer;
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  background: #007bff;
  color: white;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 4px;
`;
