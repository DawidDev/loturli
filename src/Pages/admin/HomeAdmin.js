import React from "react";
import Header from "../../Components/Header";

import styled from "styled-components";

import Elements from "../../Config/DataBase";
import { Link } from "react-router-dom";

const HomePanelContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    font-size: 2rem;
    font-weight: 300;
  }

  .filter {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin-top: 30px;

    label {
      width: 250px;
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      font-weight: 200;

      input {
        height: 35px;
        width: 100%;
        background-color: #e0efec;
        border: none;
        padding: 5px 10px;
        outline: none;
      }
    }

    .date {
      width: 100px;
    }

    select {
      background-color: #e0efec;
      border: none;
      height: 35px;
    }
  }
`;

const TripContainer = styled.div`
  display: flex;
`;

const RedenerTripContainer = styled.div`
    table {
        width: 100%;

        tr {
            background-color: #E0EFEC;
            padding: 5px;
            margin: 5px auto;
        }

        .td_title {
            width: 400px;
        }

        .td_date {
            width: 100px;
        }

        .td_avaible {
            width: 150px;
        }

        button {
            background-color: #426f74;
            border: none;
            color: #fff;
            padding: 5px;
        }


    }
`

const HomeAdmin = () => {
  const RenderData = Elements.map((item) => {
    const dateStart = `${item.date.startDay}.${item.date.startMonth}.${item.date.startYear}`;
    const dateEnd = `${item.date.endDay}.${item.date.endMonth}.${item.date.endYear}`;
    return (
      <TripContainer>
        <tr>
          <td className="td_title">
            {item.nameOfObject}, {item.location}, {item.nation}
          </td>
          <td className="td_date">{dateStart}</td>
          <td className="td_date">{dateEnd}</td>
          <td className="td_avaible">Aktywna</td>
          <td><Link to={`/admin/offer/${item.id}`}><button>Edytuj</button></Link></td>
        </tr>
      </TripContainer>
    );
  });

  return (
    <>
      <Header title={"Panel administratora"} />
      <HomePanelContainer>
        <h1>Wyszukiwanie</h1>
        <div className="filter">
          <label>
            Nazwa obiektu
            <input type="text" />
          </label>
          <label>
            Nazwa państwa
            <input type="text" />
          </label>
          <label className="date">
            Data wyjazdu
            <input type="date" />
          </label>
          <label className="date">
            Data powrotu
            <input type="date" />
          </label>
          <label className="select">
            Oferta aktywna?
            <select type="select">
              <option value="yes">tak</option>
              <option value="no">Nie</option>
              <option value="null">Puste</option>
            </select>
          </label>
        </div>
      </HomePanelContainer>
      <RedenerTripContainer>
      <table>
        {RenderData}</table>
      </RedenerTripContainer>
      
    </>
  );
};

export default HomeAdmin;
