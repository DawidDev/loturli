import React from "react";

import styled from "styled-components";

const PopularDestinationsContainer = styled.div`
  color: #3c3c3c;
  background-color: #e0efec;
  padding: 20px 0;

  .box {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    min-height: 550px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    .big_item {
      height: 500px;
      width: 100%;
      max-width: 35%;
    }

    .small_items {
      margin-left: 20px;
      width: 100%;
      max-width: 60%;
      display: flex;
      flex-wrap: wrap;

      .row {
        display: flex;
        justify-content: center;
        width: 100%;

        .item {
          height: 240px;
          width: 100%;
          max-width: 400px;
          margin: 10px;
        }
      }
    }

    .big_item,
    .small_items .row .item {
      border-radius: 20px;
      overflow: hidden;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
      }

      #information {
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 7% 10px 7%;
        text-align: left;
        background-color: rgba(61, 122, 127, 0.6);
        color: #fff;

        span {
          display: block;
        }
        .title {
          font-size: 1.5rem;
          letter-spacing: 3px;
          font-weight: 500;
        }
        .price {
          font-size: 1rem;
          font-weight: 300;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .box {
      flex-wrap: wrap;
    }
    .box .big_item {
      border: 1px solid blue;
    }

    .box .small_items {
      width: 100%;
      max-width: 100%;
      margin: 0;

      .row {
        display: flex;
        flex-wrap: wrap;

        .item {
          margin: 0;
          margin-top: 15px;
        }
      }
    }

    .box .big_item,
    .box .small_items .row .item {
      max-width: 100%;
      height: 250px;
      width: 100%;
    }
  }
`;

const elementsTab = [
  {
    id: 1,
    title: "Title",
    price: "1299",
    imgUrl:
      "https://img5.goodfon.com/wallpaper/nbig/f/9c/pesok-more-volny-pliazh-leto-zakat-summer-beach-sea-sunset-3.jpg",
    imgAlt: "description of photo",
  },
  {
    id: 2,
    title: "Title 2",
    price: "1199",
    imgUrl:
      "https://img5.goodfon.com/wallpaper/nbig/f/9c/pesok-more-volny-pliazh-leto-zakat-summer-beach-sea-sunset-3.jpg",
    imgAlt: "description of photo",
  },
  {
    id: 3,
    title: "Title 3",
    price: "1499",
    imgUrl:
      "https://img5.goodfon.com/wallpaper/nbig/f/9c/pesok-more-volny-pliazh-leto-zakat-summer-beach-sea-sunset-3.jpg",
    imgAlt: "description of photo",
  },
  {
    id: 4,
    title: "Title 4",
    price: "1599",
    imgUrl:
      "https://img5.goodfon.com/wallpaper/nbig/f/9c/pesok-more-volny-pliazh-leto-zakat-summer-beach-sea-sunset-3.jpg",
    imgAlt: "description of photo",
  },
  {
    id: 5,
    title: "Title 5",
    price: "1699",
    imgUrl:
      "https://img5.goodfon.com/wallpaper/nbig/f/9c/pesok-more-volny-pliazh-leto-zakat-summer-beach-sea-sunset-3.jpg",
    imgAlt: "description of photo",
  },
];

// A function that handles the rendering of content in mesh objects of this component 
const PopularDestinations = () => {
  const element = (title, price, imgUrl, imgAlt) => (
    <>
      <img src={imgUrl} alt={imgAlt}/>
      <div id="information">
        <span className="title">{title}</span>
        <span className="price">od {price} zł/os</span>
      </div>
    </>
  );

  const elementsToDisplay = [
    element(elementsTab[0].title, elementsTab[0].price, elementsTab[0].imgUrl, elementsTab[0].imgAlt),
    element(elementsTab[1].title, elementsTab[1].price, elementsTab[1].imgUrl, elementsTab[1].imgAlt),
    element(elementsTab[2].title, elementsTab[2].price, elementsTab[2].imgUrl, elementsTab[2].imgAlt),
    element(elementsTab[3].title, elementsTab[3].price, elementsTab[3].imgUrl, elementsTab[3].imgAlt),
    element(elementsTab[4].title, elementsTab[4].price, elementsTab[4].imgUrl, elementsTab[4].imgAlt),
  ]

  return (
    <PopularDestinationsContainer>
      <div className="box">
        <div className="big_item">
          {elementsToDisplay[0]}
        </div>
        <div className="small_items">
          <div className="row">
            <div className="item">{elementsToDisplay[1]}</div>
            <div className="item">{elementsToDisplay[2]}</div>
          </div>
          <div className="row">
            <div className="item">{elementsToDisplay[3]}</div>
            <div className="item">{elementsToDisplay[4]}</div>
          </div>
        </div>
      </div>
    </PopularDestinationsContainer>
  );
};

export default PopularDestinations;
