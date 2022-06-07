import React from "react";
import styled from "styled-components";

const BlogIncentiveContainer = styled.div`
  margin-bottom: 500px;
  display: flex;
  height: auto;
  align-items: center;
  overflow: hidden;
  justify-content: center;

  .latest_item {
    height: 300px;
    width: 55%;
  }
  .old_items {
    width: 35%;
    display: flex;
    flex-direction: column;


    .item {
      width: 100%;
      height: 140px;
      margin: 10px;
     
    }
  }
  .latest_item,
  .old_items .item {
    border-radius: 10px;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .box {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 5px 5%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7135278514588859) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    color: #fff;
    font-weight: 400;
    letter-spacing: 1px;
    font-size: 1.75rem;

    span {
      display: block;
    }

    .description {
      font-size: 0.75rem;
      font-weight: 200;
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;

    .latest_item,
    .old_items {
      width: 100%;
    }

    .latest_item,
    .old_items .item {
      height: 150px;
      margin: 0;
      margin-bottom: 10px;
    }
  }
`;

const elementsTab = [
  {
    id: 1,
    title: "Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate pharetra eros vel",
    imgUrl:
      "https://img5.goodfon.com/wallpaper/nbig/f/9c/pesok-more-volny-pliazh-leto-zakat-summer-beach-sea-sunset-3.jpg",
    imgAlt: "description of photo",
  },
  {
    id: 2,
    title: "Title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate pharetra eros vel tincidunt. ",
    imgUrl:
      "https://img5.goodfon.com/wallpaper/nbig/f/9c/pesok-more-volny-pliazh-leto-zakat-summer-beach-sea-sunset-3.jpg",
    imgAlt: "description of photo",
  },
  {
    id: 3,
    title: "Title 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgUrl:
      "https://img5.goodfon.com/wallpaper/nbig/f/9c/pesok-more-volny-pliazh-leto-zakat-summer-beach-sea-sunset-3.jpg",
    imgAlt: "description of photo",
  },
];

const BlogIncentive = () => {
  const element = (title, description, imgUrl, imgAlt) => (
    <>
      <div className="box">
        <span className="title">{title}</span>
        <span className="description">{description}</span>
      </div>
      <img src={imgUrl} alt={imgAlt} />
    </>
  );

  const elementsToDisplay = [
    element(
      elementsTab[0].title,
      elementsTab[0].description,
      elementsTab[0].imgUrl,
      elementsTab[0].imgAlt
    ),
    element(
      elementsTab[1].title,
      elementsTab[1].description,
      elementsTab[1].imgUrl,
      elementsTab[1].imgAlt
    ),
    element(
      elementsTab[2].title,
      elementsTab[2].description,
      elementsTab[2].imgUrl,
      elementsTab[2].imgAlt
    ),
  ];

  return (
    <BlogIncentiveContainer>
      <div className="latest_item">{elementsToDisplay[0]}</div>
      <div className="old_items">
        <div className="item">{elementsToDisplay[1]}</div>
        <div className="item">{elementsToDisplay[2]}</div>
      </div>
    </BlogIncentiveContainer>
  );
};

export default BlogIncentive;
