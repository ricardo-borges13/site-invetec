import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 20px;
  user-select: none;
`;

export const Section = styled.section`
  margin-bottom: 80px;
  text-align: center;

  h2 {
     color: ${({ theme }) => theme.colors.black};
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    color: #555;
    text-align: left;
  }


    /* Mobile */
  @media (max-width: 430px) {
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;


 grid-template-columns: repeat(3, 1fr);

@media (max-width: 900px) {
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 600px) {
  grid-template-columns: 1fr;
}
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  min-height: 200px;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  }

  h3 {
    margin-bottom: 10px;
  }

  p {
    font-size: 0.95rem;
  }
`;

export const Highlight = styled.div`
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  padding: 40px;
  border-radius: 16px;
  text-align: center;
  margin-bottom: 80px;

  h2 {
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-top: 20px;

    li {
      margin-bottom: 8px;
    }
  }
`;

export const CTA = styled.div`
  text-align: center;

  p {
    margin-bottom: 20px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Carousel = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding: 10px 0 10px 10px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
  background: #f9fafb;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  /* Remove barra feia */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  img {
    flex: 0 0 auto;
    width: 320px;
    height: 200px;
    object-fit: cover;

    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.colors.lightGray};

    scroll-snap-align: start;

    transition: 0.3s;
  }

  img:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    img {
      width: 260px;
      height: 160px;
    }
  }
`;

export const CarouselWrapper = styled.div`
  margin-top: 2rem;

  .carousel {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
    background: #f9fafb;
  }

  .carousel-item {
    text-align: center;
    padding: 20px;
  }

  .carousel-img {
    height: 100px;
    width: auto;
    max-width: 100%;
    object-fit: contain;
  }

  .carousel-control-prev,
.carousel-control-next {
  width: 60px;
  opacity: 1;
}

.carousel-indicators [data-bs-target] {
  background-color: #000; /* 🔥 cor visível */
  opacity: 0.5;
  height: 4px;
  width: 30px;
  border-radius: 4px;
}

.carousel-indicators .active {
  opacity: 1;
  background-color: ${({ theme }) => theme.colors.primary};
}



  @media (max-width: 768px) {
    .carousel-img {
      height: 50px;
    }
  }
`;
