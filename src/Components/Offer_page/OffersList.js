import React, { useEffect, useState } from "react";
import { Link, StyledLink } from 'react-router-dom'

import styled from "styled-components";

// Importowanie elementów z bazy danych (symulowanej)
import Elements from "../../Config/DataBase";

const OffersListContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  .offer_item {
    display: flex;
    overflow: hidden;
    border: 1px solid #426f74;
    width: 90%;
    margin: 20px auto;
    border-radius: 20px;
    position: relative;
    height: 250px;


    .image {
      height: 100%;
      width: 250px;
      border-radius: 20px;
      object-fit: cover;
      overflow: hidden;

      img {
        width: auto;
        height: 100%;
      }
    }

    .information {
      padding: 10px;
      padding-left: 5%;

      .location {
        font-size: 1rem;
        font-weight: 200;
      }

      .nameOfObject {
        font-size: 1.5rem;
        font-weight: 300; 

        a {
          text-decoration: none;
          color: #4b5f5f;

          :hover {
            cursor: pointer;
          }
        }
      }

      .specification {
        margin-top: 20px;
        p {
          margin: 0;
          margin-bottom: 3px;
          font-size: 1rem;
          font-weight: 200;

          i {
            margin-right: 10px;
            color: #4b5f5f;
          }
        }
      }
    }

    .price {
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: #426f74;
      border-radius: 20px 0 0 0;
      padding: 8px 25px;

      p {
        margin: 0;
        color: #fff;
        font-size: 2rem;
        font-weight: 300;
      }

      #person {
        font-size: 1rem;
        float: right;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 80px;

    .offer_item {
      min-height: 400px;
      flex-direction: column;


      .image {
        width: 100%;

        img {
        width: 100%;
        height: auto;
        min-height: 100%;
      }
      }

      .price {
        padding: 5px 17px;
        p {
          font-size: 1.2rem;
        }
        #person {
            font-size: 0.8rem;
        }
      }
    }
  }
`;

const OffersList = () => {
  const [tabOffer, setTabOffer] = useState(Elements);

  const OfferItems = tabOffer.map((item) => {
    const startDate = `${item.date.startDay}.${item.date.startMonth}.${item.date.startYear}`;
    const endDate = `${item.date.endDay}.${item.date.endMonth}.${item.date.endYear}`;

    // Uzupełnianie ilości lokalizacji wyjazdu
    let departureFrom = "";
    for (let index = 0; index < item.departureFrom.length; index++) {
      if (index < 2) {
        departureFrom += item.departureFrom[index] + ", ";
      } else if ((index) => 2) {
        const number = item.departureFrom.length - 3;
        departureFrom += `(+${number})`;
        break;
      }
    }

    return (
      <div className="offer_item" id={item.id}>
        <div className="image">
            <img src={item.img} alt="img-test"/>
        </div>
        <div className="information">
          <div className="location">
            {item.nation}
            {item.location}
          </div>
          <div className="nameOfObject"><Link to={`/offer/${item.id}`}>{item.nameOfObject}</Link></div>
          <div className="specification">
            <p>
              <i class="bi bi-calendar-week"></i>
              {startDate} - {endDate}
            </p>
            <p>
              <i class="bi bi-hourglass-split"></i>
              {item.nights}
            </p>
            <p>
              <i class="bi bi-compass"></i>
              {departureFrom}
            </p>
            <p>
              <i class="bi bi-cup-straw"></i>
              {item.board}
            </p>
          </div>
        </div>
        <div className="price">
          <p>od {item.pricePerPerson} zł</p>
          <p id="person">za osobę</p>
        </div>
      </div>
    );
  });

  return <OffersListContainer>{OfferItems}</OffersListContainer>;
};

export default OffersList;
