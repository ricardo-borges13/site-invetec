import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f7fa;
`;

export const Content = styled.div`
  text-align: center;
  padding: 40px;
`;

export const Title = styled.h1`
  font-size: 96px;
  margin: 0;
  color: #2563eb;
`;

export const Subtitle = styled.h2`
  font-size: 28px;
  margin: 10px 0 20px;
  color: #333;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: #1e40af;
  }
`;
