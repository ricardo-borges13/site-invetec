import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

export const FormSection = styled.section`
  background: linear-gradient(180deg, #eef6ff 0%, #ffffff 100%);
  border: 1px solid #dbeafe;

  border-radius: 20px;

  padding: 30px;
  margin-top: 40px;

  box-shadow: 0 20px 40px rgba(13, 110, 253, 0.08);

  text-align: center;

  h3 {
    margin-bottom: 20px;
    color: #0b3c7c;
  }
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
  text-align: left;

  label {
    font-weight: 600;
    color: #1e293b;
  }

  input {
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #cbd5e1;

    font-size: 1rem;

    &:focus {
      border-color: #1677ff;
      box-shadow: 0 0 0 3px rgba(22, 119, 255, 0.15);
      outline: none;
    }
  }
`;

export const ResultCard = styled.div`
  margin-top: 25px;

  padding: 20px;

  background: white;
  border: 2px solid #1677ff;

  border-radius: 16px;

  box-shadow: 0 15px 35px rgba(22, 119, 255, 0.15);

  span {
    font-size: 0.9rem;
    color: #64748b;
  }

  h2 {
    margin-top: 8px;
    font-size: 1.6rem;
    font-weight: 700;

    color: #1677ff;
  }
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

export const InfoBox = styled.div`
  max-width: 700px;;
  text-align: center;

  h2 {
    margin-bottom: 10px;
  }

  p {
    color: #475569;
    margin-bottom: 15px;
  }
`;

export const Accordion = styled.div`
  max-width: 700px;
  margin: 40px auto 0;
  margin-bottom: 60px;
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

export const Highlight = styled.section`
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #1677ff, #0b5ed7);
  color: white;

  h2 {
    margin-bottom: 0.5rem;
  }

  p {
    max-width: 600px;
    margin: 0 auto;
    p {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  a {
    display: inline-block;
    background: #22c55e;
    padding: 14px 30px;
    border-radius: 999px;
    font-weight: bold;
    text-decoration: none;
    margin-top: 20px;
  }

  a:hover {
    background: #16a34a;
  }
`;

