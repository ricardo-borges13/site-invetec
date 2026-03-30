import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #f8fafc;
  padding: ${({ theme }) => theme.spacing.large};
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);

  width: 100%;
  max-width: 500px;

  form {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.medium};
  }

  label {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.black};
    display: block;
    margin-bottom: 0.3rem;
    caret-color: transparent;
  }

  p{
    color: #6b7280;
    font-Size: 0.85rem;
    margin-bottom: 20px;
    opacity: 0.7;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  gap: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column; // ← Empilha em mobile
  }
`;

export const Input = styled.input`
  width: 100%;
  background: white;
  padding: 0.8rem;
  border: none;
  border-radius: 8px;
    font-size: 0.95rem;
    border: 1px solid #e5e7eb;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;

  border: 1px solid #e5e7eb;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.85rem;
  margin-top: 0.3rem;
  display: block;
`;

export const Assunto = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Mensagem = styled.div`
  display: flex;
  flex-direction: column;
`;
