import React, { useState } from "react";
import PropTypes from "prop-types";
import Slick from "react-slick";
import styled from "styled-components";

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Overlay>
      <Header>
        <Title>상세 이미지</Title>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Header>
      <div>
        <div>
          <Slick
            initialSlide={0}
            afterSlide={(slide) => setCurrentSlide(slide)}
            infinite
            arrow={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((image) => (
              <div key={image.src}>
                <img src={image.src} alt={image.src} />
              </div>
            ))}
          </Slick>
        </div>
      </div>
    </Overlay>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

const Overlay = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Header = styled.header`
  height: 44px;
  background: white;
  position: relative;
  padding: 0;
  text-align: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 17px;
  color: #333;
  line-height: 44px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 15px;
  line-height: 14px;
  cursor: pointer;
`;

const SlickWrapper = styled.div`
  height: calc(100% - 44px);
  background: #090909;
`;

const ImageWrapper = styled.div`
  padding: 32px;
  text-align: center;
`;

const Image = styled.img``;

export default ImagesZoom;
