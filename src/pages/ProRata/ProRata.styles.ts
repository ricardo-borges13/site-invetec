import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-weight: 600;
    color: #1e293b;
  }

  input {
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid #cbd5e1;

    font-size: 1rem;

    transition: 0.2s;

    &:focus {
      border-color: #1677ff;
      box-shadow: 0 0 0 3px rgba(22, 119, 255, 0.15);
      outline: none;
    }
  }
`;
export const Button = styled.button`
  margin-top: 10px;

  width: 100%;

  padding: 14px;

  background: linear-gradient(135deg, #1677ff, #0b5ed7);
  color: white;

  border: none;
  border-radius: 12px;

  font-weight: 600;
  font-size: 1rem;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 24px rgba(22, 119, 255, 0.25);
  }
`;

export const Result = styled.div`
  margin-top: 35px;
  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CopyButton = styled.button`
  background: #0ea5e9;
  color: white;
  padding: 10px 14px;
  border-radius: 8px;
  border: none;
  margin-top: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;


export const InfoBox = styled.div`
  max-width: 700px;
  margin: 0 auto 40px;
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }

  p {
    color: #475569;
    margin-bottom: 15px;
  }

  ul {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;


      gap: 1px;
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 1px;
      color: #1e293b;

        &:before {
          content: '✔';
          color: #10b981;
        }
    }
  }
`;

export const Divider = styled.hr`
  border: none;
  height: 4px;
  background: linear-gradient(to right, transparent, #1677ff, transparent);
  margin: 3rem auto;
  width: 80%;
  border-radius: 2px;
`;

export const Accordion = styled.div`
  max-width: 700px;
  margin: 40px auto 0;
`;


export const Item = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 10px;
  background: #f9fafb;

  h3 {
    cursor: pointer;
    margin-bottom: 6px;
  }

  p {
    color: #475569;
    line-height: 1.6;
  }
`;

export const Header = styled.h5`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FormSection = styled.section`
 gap: 20px;
  background: linear-gradient(180deg, #f0f7ff 0%, #e6f0ff 100%);
  border: 1px solid #cfe2ff;

  border-radius: 20px;

  max-width: 760px;
  margin: 50px auto;

  padding: 32px 28px;

  box-shadow: 0 20px 40px rgba(13, 110, 253, 0.08);

  h3 {
  margin-bottom: 10px;
  color: #0b3c7c;
}

  @media (max-width: 768px) {
    padding: 22px 18px;
    margin: 30px auto;
  }
`;

export const TitleForm = styled.div`
display: flex;
justify-content: center;
`

export const divValor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 20px;
  margin-top: 25px;

  /* Remove as setas em navegadores baseados em WebKit (Chrome, Safari, Edge) */
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Remove as setas no Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`

export const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;

  label {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
  }
`;


export const UsageBox = styled.div`
  margin-top: 25px;

  padding: 20px;

  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;

  box-shadow: 0 8px 20px rgba(0,0,0,0.04);

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ResultCard = styled.div`
  margin-top: 2px;
  padding: 24px;

  background: linear-gradient(180deg, #eef6ff 0%, #ffffff 100%);
  border: 2px solid #1677ff;

  border-radius: 16px;

  box-shadow: 0 15px 35px rgba(22, 119, 255, 0.15);

  text-align: center;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;


export const ResultPeriod = styled.p`
  font-size: 1.4rem;
  color: #64748b;

  strong {
    color: #1e293b;
    font-weight: 700;
  }
`;

export const ResultValue = styled.h2`
  font-size: 2.6rem;
  font-weight: 800;
  color: #0b5ed7;
text-shadow: 0 2px 10px rgba(11, 94, 215, 0.15);

  background: linear-gradient(135deg, #1677ff, #10b981);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  letter-spacing: -1px;
  margin: 5px 0;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin: 20px 0 10px;

  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
