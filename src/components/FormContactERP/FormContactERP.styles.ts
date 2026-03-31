import styled from 'styled-components';

export const FormContainer = styled.div`
  background: linear-gradient(180deg, #f8fafc, #eef2f7);
  padding: 30px;
  border-radius: 16px;
   box-shadow: 0 15px 40px rgba(0,0,0,0.08);
  border: 1px solid #e5e7eb;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  label {
    font-weight: 500;
    margin-bottom: 4px;
    text-align: left;
  }

  p {
    margin-bottom: 10px;
    font-size: 0.9rem;
    opacity: 0.7;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.7rem;
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
  padding: 0.7rem;
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
  padding: 0.7rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;

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
  display: flex;
  flex-direction: column;
  text-align: left;
`;
