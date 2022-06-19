import React from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import Elements from "../../Config/DataBase";
import Header from "../../Components/Header";

const ParamsContainer = styled.div`
  display: flex;
  max-width: 1400px;
  margin: 0 auto;

  .column {
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 0 20px;
  }
  label {
    margin: 10px;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-weight: 200;

    input, select {
      height: 35px;
      width: 100%;
      background-color: #e0efec;
      border: none;
      padding: 5px 10px;
      outline: none;
    }
  }
`;

const DescriptionArea = styled.div`
    width: 80%;
    min-height: 300px;
    margin: 0 auto;
    max-width: 1400px;

    textarea {
        width: 100%;
        border: none;
        padding: 10px;
        min-height: 200px;
        font-size: 18px;
        font-family: 'kanit';
        font-weight: 200;
    }
`

const EditOffer = () => {
  const { id } = useParams();

  const dateStart = `${Elements[id].date.startDay}.${Elements[id].date.startMonth}.${Elements[id].date.startYear}`;
  const dateEnd = `${Elements[id].date.endDay}.${Elements[id].date.endMonth}.${Elements[id].date.endYear}`;

  return (
    <>
      <Header title={"Panel administratora - edycja oferty"} />
      <ParamsContainer>
        <div className="column">
          <label>
            Nazwa obiektu
            <input type="text" value={Elements[id].nameOfObject} />
          </label>
          <label>
            Państwo
            <input type="text" value={Elements[id].nation} />
          </label>
          <label>
            Miasto
            <input type="text" value={Elements[id].location} />
          </label>
          <label>
            Data wyjazdu
            <input type="date" value={dateStart} />
          </label>
          <label>
            Godzina wyjazdu
            <input type="time" />
          </label>
          <label>
            Miasto wyjazdu
            <select></select>
          </label>
        </div>
        <div className="column">
          <label>
            Miejsce wyjazdu (np. nazwa lotniska)
            <input type="text" />
          </label>
          <label>
            Data powrotu
            <input type="date" value={dateEnd} />
          </label>
          <label>
            Godzina powrotu
            <input type="time" />
          </label>
          <label>
            Miasto powrotu
            <input type="select" />
          </label>
          <label>
            Miejsce powrotu (np. nazwa lotniska)
            <input type="text" />
          </label>
          <label>
            Wyżywienie<select></select>
          </label>
        </div>
        <div className="column">
          <label>
            Cena za osobę
            <input type="number" />
          </label>
          <label>
            Dostępne miejsca
            <input type="number" />
          </label>
          <label>
            Liczba gwiazdek
            <input type="number" />
          </label>
          <label>
            Nasza ocena
            <input type="number" />
          </label>
          <label>
            Współrzędne lokalizacji
            <input type="text" />
          </label>
        </div>
      </ParamsContainer>
      <DescriptionArea>
        <textarea value={Elements[id].description}></textarea>
      </DescriptionArea>
    </>
  );
};

export default EditOffer;
