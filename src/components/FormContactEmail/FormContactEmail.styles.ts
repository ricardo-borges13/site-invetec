import styled from 'styled-components';

export const FormContainer = styled.div`
  background: #f9fafb;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  label {
    font-weight: 500;
    margin-bottom: 4px;
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

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.7rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.7rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
`;


export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.85rem;
  margin-top: 0.3rem;
  display: block;
`;
