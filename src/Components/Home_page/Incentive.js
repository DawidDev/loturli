import React from "react";

import img1 from "../../Images/woman.jpg";

import styled from "styled-components";

const IncentiveContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .discounts,
  .last_minute {
    border-radius: 10px;
    height: 300px;
  }

  .discounts {
    background-color: silver;
    flex: 6;
    margin-right: 20px;
    background-color: #426f74;
    overflow: hidden;
    position: relative;

    p {
      margin: 0;
      margin: auto;
      line-height: 3.5rem;
      color: #fff;
    }

    .main_info {
      margin-top: 20px;
      font-size: 3.5rem;
      margin-left: 20px;

      span {
        font-size: 2.5rem;
        font-weight: 500;
      }
    }

    .discount {
      color: #f3ddb0;
      font-size: 1.5rem;
      margin-left: 20px;
    }

    button {
      padding: 10px;
      margin-left: 20px;
      border: 1px solid #fff;
      border-radius: 5px;
      background-color: transparent;
      color: #fff;
      font-size: 1.25rem;
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    .gradient {
      position: absolute;
      top: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background: rgb(66, 111, 116);
      background: linear-gradient(
        90deg,
        rgba(66, 111, 116, 1) 0%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    p {
    }
  }

  .last_minute {
    background-color: #ddcfc2;
    flex: 3;

    h3 {
      margin: 10px;
      margin-left: 25px;
      font-weight: 300;
      font-size: 1.25rem;
    }

    table {
      width: 90%;
      text-align: left;
      margin: 0 auto;

      td {
        font-weight: 200;
        border-bottom: 1px solid #426f74;
        font-size: 1.15rem;
      }
    }
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;

    .discounts,
    .last_minute {
      width: 100%;
      flex: none;
      margin-bottom: 10px;
    }
  }
`;

const Incentive = () => {
  const LastMinute = [
    {
      location: "Zakynthos",
      nation: "Grecja",
      price: 1999,
    },
    {
      location: "Mykonos",
      nation: "Grecja",
      price: 2125,
    },
    {
      location: "Baltura",
      nation: "Bułgaria",
      price: 1256,
    },
    {
      location: "Pula",
      nation: "Chorwacja",
      price: 2150,
    },
    {
      location: "Alanya",
      nation: "Turcja",
      price: 2499,
    },
    {
      location: "Kreta",
      nation: "Chania",
      price: 2399,
    },
    {
      location: "Porto",
      nation: "Portugalia",
      price: 1899,
    },
  ];

  const returnLastMinute = LastMinute.map((item) => (
    <tr>
      <td>
        {item.nation}, {item.location}
      </td>
      <td>{item.price} zł/os</td>
    </tr>
  ));

  return (
    <>
      <IncentiveContainer>
        <div className="discounts">
          <img src={img1} />
          <div className="gradient">
            <p className="main_info">
              Topniejące
              <br />
              <span>rabaty</span>
            </p>
            <p className="discount">Nawet 350 zł taniej!</p>
            <button>Sprawdź oferty</button>
          </div>
        </div>
        <div className="last_minute">
          <h3>Najnowsze last minute</h3>
          <table>{returnLastMinute}</table>
        </div>
      </IncentiveContainer>
    </>
  );
};

export default Incentive;
