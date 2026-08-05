import styled from 'styled-components';

export const Card = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 248px;
  padding: 28px;
  overflow: hidden;
  border: 1px solid rgba(26, 46, 74, 0.12);
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 28px rgba(26, 46, 74, 0.07);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: translateY(-3px);
      border-color: rgba(0, 123, 255, 0.3);
      box-shadow: 0 16px 34px rgba(26, 46, 74, 0.12);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: 768px) {
    min-height: 0;
    padding: 24px;
  }
`;

export const QuoteIcon = styled.span`
  position: absolute;
  top: 12px;
  right: 22px;
  color: rgba(0, 123, 255, 0.12);
  font-family: Georgia, serif;
  font-size: 4rem;
  line-height: 1;
`;

export const TestimonialText = styled.div`
  position: relative;
  flex: 1;
  margin-bottom: 24px;
  padding-right: 24px;
  color: #374151;
  font-size: 0.98rem;
  line-height: 1.65;

  blockquote {
    margin: 0;
  }
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AuthorImage = styled.img`
  width: 44px;
  height: 44px;
  flex: 0 0 auto;
  border: 1px solid rgba(0, 123, 255, 0.18);
  border-radius: 50%;
  object-fit: cover;
`;

export const Identification = styled.div`
  display: grid;
  gap: 3px;

  strong {
    color: ${({ theme }) => theme.colors.primaryDark};
    font-size: 0.94rem;
  }

  cite {
    color: #5b6472;
    font-size: 0.84rem;
    font-style: normal;
  }
`;

export const Services = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 18px 0 0;
  padding: 0;
  list-style: none;

  li {
    padding: 5px 9px;
    border-radius: 999px;
    background: #eef5ff;
    color: ${({ theme }) => theme.colors.lightPrimary};
    font-size: 0.75rem;
    font-weight: 600;
  }
`;

export const Rating = styled.span`
  color: #d49b09;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
`;

export const VideoButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  margin-top: 18px;
  padding: 8px 12px;
  border: 1px solid rgba(0, 123, 255, 0.2);
  border-radius: 999px;
  background: #eef5ff;
  color: ${({ theme }) => theme.colors.lightPrimary};
  cursor: pointer;
  font-size: 0.84rem;
  font-weight: 600;

  &:focus-visible {
    outline: 3px solid rgba(0, 123, 255, 0.35);
    outline-offset: 3px;
  }
`;
