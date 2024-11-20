import React, { useState } from 'react';
import styled from 'styled-components';
import themeGet from '../../utils/themeGet';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Carousel = ({ items, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <CarouselContainer>
      <Title>{title}</Title>
      <CarouselWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <CarouselCardStyled key={index}>
            <CarouselImage />
            <CarouselDescription>{item.description}</CarouselDescription>
            <CarouselTitle>{item.presenter}</CarouselTitle>
          </CarouselCardStyled>
        ))}
      </CarouselWrapper>
      <LeftButton onClick={handlePrev}>
        <BsChevronLeft size={32}/>
      </LeftButton>
      <RightButton onClick={handleNext}>
        <BsChevronRight size={32}/>
      </RightButton>
      <CarouselNav>
        {items.map((_, index) => (
          <CarouselDot key={index} active={index === currentIndex} />
        ))}
      </CarouselNav>
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  position: relative;
  width: 1180px;
  height: 552px;
  background-color: ${themeGet('color.white')};
  overflow: hidden;
  display: flex;
  justify-content: center;  // CarouselWrapper를 중앙에 정렬
`;

const Title = styled.div`
  position: absolute;
  left: 80px;
  top: 40px;
  font-size: ${themeGet('fonts.h3.font_size')};
  font-weight: bold;
`;

const CarouselWrapper = styled.div`
  display: flex;
  padding: 40px auto;
  gap: 40px;
  height: 560px;
  transition: transform 0.3s ease-in-out;
  align-items: center;
`;

const CarouselCardStyled = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 10px 1px #00000040;
  width: 314px;
  height: 342px;
  overflow: hidden;
`;

const CarouselImage = styled.div`
  background-color: ${themeGet('color.neutral_200')};
  height: 200px;
  margin: 0px;
`;

const CarouselDescription = styled.p`
  color: ${themeGet('color.neutral_400')};
  font-size: ${themeGet('fonts.body1.font_size')};
  margin: 20px auto;
  word-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  text-align: center;
  line-height: 25px;
  display: block; 
  width: 80%;
`;

const CarouselTitle = styled.h3`
  font-weight: bold;
  text-align: center;
`;

const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${themeGet('color.main_light')};
  color: ${themeGet('color.white')};
  border: none;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const LeftButton = styled(CarouselButton)`
  left: 40px;
`;

const RightButton = styled(CarouselButton)`
  right: 40px;
`;

const CarouselNav = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
`;

const CarouselDot = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 9999px;
  background-color: ${(props) => (props.active ? themeGet('color.coral-500') : themeGet('color.gray-300'))};
`;