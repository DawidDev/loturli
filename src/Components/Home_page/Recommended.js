import React from "react";

import styled from "styled-components";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

import hotel1 from "../../Images/hotel1.webp";
import hotel2 from "../../Images/hotel2.webp";
import hotel3 from "../../Images/hotel3.webp";
import hotel4 from "../../Images/hotel4.webp";
import hotel5 from "../../Images/hotel5.webp";

const RecommendedContainer = styled.div`
  margin: 10px;
  color: #3c3c3c;

  .box {
    border: 1px solid #707070;
    height: 400px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    .photo_box {
      width: 100%;
      height: 65%;
      background-color: silver;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    p {
      margin: 0 20px;
    }
    #title {
      font-size: 25px;
      font-weight: 300;
    }

    #location {
      font-size: 17px;
      font-weight: 200;
    }

    #price {
      color: #426f74;
      position: absolute;
      bottom: 5%;
      right: 0;
      font-size: 2.5rem;

      span {
        font-size: 1.25rem;
      }
    }
  }

  .mySwiper {
    padding: 10px;
    padding-bottom: 30px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #426f74;
  }

  .swiper-pagination-bullet-active {
    background-color: #426f74;
  }

  .swiper-pagination {
    bottom: 0px;
  }
`;

const dataToDisplay = [
  {
    title: "Hotel Nazwa 1",
    nation: "Grecja",
    region: "Zakynthos",
    ourRate: 8,
    price: 2999,
    urlPhoto: hotel1,
  },
  {
    title: "Hotel Nazwa 2",
    nation: "Bułgaria",
    region: "Zakynthos",
    ourRate: 5,
    price: 2999,
    urlPhoto: hotel2,
  },
  {
    title: "Hotel Nazwa 3",
    nation: "Hiszpania",
    region: "Zakynthos",
    ourRate: 4,
    price: 2999,
    urlPhoto: hotel3,
  },
  {
    title: "Hotel Nazwa 4",
    nation: "Grecja",
    region: "Zakynthos",
    ourRate: 2,
    price: 2999,
    urlPhoto: hotel4,
  },
];

const Recommended = () => {
  const slides = dataToDisplay.map((item) => {
    return (
      <SwiperSlide key={item.title}>
        <div className="box">
          <div className="photo_box">
            <img src={item.urlPhoto} />
          </div>
          <p id="title">{item.title}</p>
          <p id="location">
            {item.nation}, {item.region}
          </p>
          <p id="stars">{item.ourRate}/10</p>
          <p id="price">
            {item.price} zł<span>/os</span>
          </p>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <RecommendedContainer>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        {slides}
      </Swiper>
    </RecommendedContainer>
  );
};

export default Recommended;
