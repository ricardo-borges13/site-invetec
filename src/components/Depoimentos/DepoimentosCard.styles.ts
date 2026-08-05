import styled from 'styled-components';

export const Card = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: rgba(255, 255, 255, 0.97);

  border: 1px solid rgba(255, 255, 255, 0.6);

  border-radius: 20px;

  padding: 22px;

  min-height: 240px;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 1px 2px rgba(255, 255, 255, 0.4) inset;

  overflow: hidden;

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease,
    border-color 0.35s ease;

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(249, 115, 22, 0.18);

    box-shadow:
      0 20px 45px rgba(0, 0, 0, 0.12),
      0 1px 2px rgba(255, 255, 255, 0.6) inset;
  }

  @media (max-width: 1440px) {
    min-height: 200px;
  }

  @media (max-width: 768px) {
    padding: 20px;

    min-height: auto;
  }
`;

export const QuoteIcon = styled.div`
  position: absolute;

  top: 16px;
  right: 22px;

  font-size: 3rem;

  color: rgba(249, 115, 22, 0.12);

  line-height: 1;

  font-family: serif;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;

  margin-bottom: 14px;
`;

export const Avatar = styled.img`
  width: 52px;
  height: 52px;

  border: 3px solid rgba(249, 115, 22, 0.15);

  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.12);

  border-radius: 50%;

  object-fit: cover;

  flex-shrink: 0;
`;

export const UserInfo = styled.div`
  h3 {
    font-size: 0.98rem;

    font-weight: 700;

    margin-bottom: 4px;

    color: #111827;
  }

  span {
    font-size: 0.84rem;

    color: #4b5563;

    font-weight: 500;

    opacity: 0.8;
  }
`;

export const Stars = styled.div`
  margin-top: 6px;

  color: #f97316;

  letter-spacing: 2px;

  font-size: 0.75rem;

  opacity: 0.9;
`;

export const TestimonialText = styled.p`
  max-width: 94%;

  font-size: 0.95rem;

  line-height: 1.52;

  color: #4b5563;

  display: -webkit-box;

  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  overflow: hidden;

  margin-bottom: 16px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const VideoButton = styled.button`
  display: inline-flex;
  align-items: center;

  gap: 8px;

  border: none;

  background: rgba(249, 115, 22, 0.08);

  padding: 8px 14px;

  border-radius: 999px;

  width: fit-content;

  color: #f97316;

  font-size: 0.88rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    opacity: 0.9;

    background: rgba(249, 115, 22, 0.14);
  }
`;
