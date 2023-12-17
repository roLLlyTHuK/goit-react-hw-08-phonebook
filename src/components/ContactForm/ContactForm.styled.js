import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border: 1px solid #1976d2;
  background-color: #1976d2;
  padding: 20px;
  gap: 10px;
  width: 300px;
  margin: 0 auto;
`;

export const Text = styled.p`
  color: white;
  margin: 0;
`;

export const ErrorText = styled.p`
  margin: 0;
  color: red;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 30px;
  font-size: 20px;
  color: #1976d2;
  border-radius: 4px;
  border: 1px solid #1976d2;
  padding-left: 8px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  border-color: black;
  font-size: 20px;
  margin: 0 auto;
`;
