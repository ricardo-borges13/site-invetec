import styled from 'styled-components';

export const CardContainer = styled.div<{ $clickable?: boolean }>`
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};

  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 20px;
  min-height: 220px;
  height: 100%; /* 🔥 importante */
  text-align: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  display: flex; /* 🔥 */
  flex-direction: column; /* 🔥 */
  justify-content: space-between; /* 🔥 */

  &:hover {
    transform: ${({ $clickable }) => ($clickable ? 'translateY(-6px)' : 'none')};
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }


`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  width: auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.darkGray};
  line-height: 1.4;
`;

export const Badge = styled.span`
  display: inline-block;
  background: rgba(255, 140, 0, 0.15);
  color: #ff8c00;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 6px;
  margin-bottom: 8px;
`;
