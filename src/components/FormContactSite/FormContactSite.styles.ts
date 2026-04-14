import styled, { css } from 'styled-components';

export const FormContainer = styled.div`
  background: linear-gradient(180deg, #f8fafc, #eef4fb);
  padding: 30px;
  border-radius: 18px;
  border: 1px solid #d8e4f2;
  box-shadow: 0 16px 38px rgba(15, 23, 42, 0.08);
  width: 100%;
  max-width: 680px;
  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  label {
    display: inline-block;
    margin-bottom: 6px;
    color: ${({ theme }) => theme.colors.black};
    font-weight: 600;
    text-align: left;
  }

  @media (max-width: 768px) {
    padding: 20px 16px;
    border-radius: 16px;
  }
`;

export const IntroText = styled.p`
  margin: 0 0 1rem;
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  text-align: left;
`;

export const FieldGroup = styled.div`
  display: flex;
  gap: 14px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Field = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const sharedFieldStyles = css`
  width: 100%;
  min-height: 48px;
  padding: 0.8rem 0.95rem;
  border-radius: 12px;
  border: 1px solid #dbe2ea;
  background: #fff;
  font-size: 0.95rem;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
    transform: translateY(-1px);
  }
`;

export const Input = styled.input`
  ${sharedFieldStyles}
`;

export const Select = styled.select`
  ${sharedFieldStyles}
`;

export const TextArea = styled.textarea`
  ${sharedFieldStyles}
  min-height: 110px;
  resize: vertical;
`;

export const SubmitRow = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0.5rem;

  button {
    min-width: min(100%, 320px);
  }

  @media (max-width: 768px) {
    button {
      width: 100%;
    }
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error || '#dc2626'};
  font-size: 0.82rem;
  margin-top: 0.35rem;
  display: block;
`;
