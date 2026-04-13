import styled from 'styled-components';

export const FormContainer = styled.div`
  background: #f9fafb;
  padding: 30px;
  border-radius: 20px;
  border: 1px solid #dbe5f1;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);

  form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  label {
    display: inline-block;
    font-weight: 600;
    margin-bottom: 6px;
    color: #1e293b;
  }

  @media (max-width: 768px) {
    padding: 20px 16px;
    border-radius: 18px;
  }
`;

export const IntroText = styled.p`
  margin: 0 0 1rem;
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
`;

export const Field = styled.div`
  width: 100%;
`;

export const FieldGroup = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 18px;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-height: 48px;
  padding: 0.8rem 0.95rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background: #fff;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.12);
    transform: translateY(-1px);
  }
`;

export const Select = styled.select`
  width: 100%;
  min-height: 48px;
  padding: 0.8rem 0.95rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background: #fff;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.12);
    transform: translateY(-1px);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 0.8rem 0.95rem;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background: #fff;
  resize: vertical;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.12);
    transform: translateY(-1px);
  }
`;

export const SubmitRow = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;

  button {
    min-width: min(100%, 320px);
  }

  @media (max-width: 768px) {
    width: 100%;

    button {
      width: 100%;
    }
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.85rem;
  margin-top: 0.3rem;
  display: block;
`;
