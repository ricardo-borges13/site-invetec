import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  background: #fff;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  label {
    font-weight: 500;
    margin-bottom: 4px;
    text-align: left;
  }

  p {
    margin-bottom: 10px;
    font-size: 0.9rem;
    color: #475569;
    line-height: 1.5;
  }

  button {
    width: 100%;
    min-width: 0;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
  @media (max-width: 390px) {
    padding: 16px;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  gap: 10px;

  > * {
    min-width: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error || '#dc2626'};
  font-size: 0.8rem;
  margin-top: 4px;
  display: block;
  overflow-wrap: anywhere;
`;

export const Assunto = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Mensagem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Field = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  text-align: left;
`;
