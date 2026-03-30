import styled from 'styled-components';

export const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 20px;
  min-height: 220px;
  height: 100%; /* 🔥 importante */
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all 0.3s ease;

  display: flex; /* 🔥 */
  flex-direction: column; /* 🔥 */
  justify-content: space-between; /* 🔥 */

  &:hover {
    transform: translateY(-8px) scale(1.02);
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
