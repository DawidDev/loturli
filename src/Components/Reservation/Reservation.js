import React from "react";
import { useParams } from "react-router-dom";

import TitleSection from "../Home_page/TitleSection";
import Header from "../Header";
import Person from "./Person";
import Summary from "./Summary";

import styled from "styled-components";

// Symulacyjna baza danych
import Elements from "../../Config/DataBase";

const ReservationContainer = styled.div`
max-width: 1400px;
margin: 0 auto;
  .offer_info {
    background-color: #e0efec;
    min-height: 250px;
    margin: 0 auto;
    padding: 10px;

    .main_info {
      #name_object {
        font-size: 2.5rem;
        margin: 0;
        font-weight: 300;
      }
      #rating {
        font-size: 1.2rem;
        margin: 10px 0;
        font-weight: 200;
      }
    }

    .this_trip_info {
      display: flex;
      justify-content: space-around;
      font-weight: 200;
      margin-top: 15px;

      #column {
        margin: 5px;
      }

      p {
        margin: 0;
      }
      #name_specify {
        font-weight: 400;
      }
    }
  }

  .box_people_input {
    margin: 0 auto;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .offer_info {
      .main_info {
        #name_object {
          font-size: 1.5rem;
        }
      }
    }
    .this_trip_info {
      flex-direction: column;
    }
  }
`;

const Reservation = () => {
  const { id, numberBook } = useParams();
  console.log("Wybrane ID: " + id);
  console.log("Wybrana ilosć miejsc: " + numberBook);

  const idOfOffer = id; // ID oferty w bazie danych przesyłana ze strony z ofertą
  const bookedPlaces = numberBook; // Wybrana ilość miejsc do rezerwacji

  const TripELement = Elements[idOfOffer];

  const dateStart = `${TripELement.date.startDay}.${TripELement.date.startMonth}.${TripELement.date.startYear}`;
  const dateEnd = `${TripELement.date.endDay}.${TripELement.date.endMonth}.${TripELement.date.endYear}`;

  let departures = "";
  for (let i = 0; i < TripELement.departureFrom.length; i++) {
    departures += TripELement.departureFrom[i] + ", ";
  }

  // Tworzenie kontenerów odpowiedniej ilości do wprowadzenia danych osób 
  const manualTab = [];
  for (let y = 0; y < numberBook; y++) {
    manualTab.push(<Person />);
  }
  const renderPepleDataInput = manualTab.map((item) => item);
  return (
    <>
      <Header title={"Formularz rezerwacji"} />
      <TitleSection title={"Wysyłanie zgłoszenia"} />
      <ReservationContainer>
        <div className="offer_info">
          <div className="main_info">
            <p id="name_object">{TripELement.nameOfObject}</p>
            <p id="rating">Nasza ocena: {TripELement.ourRate}/10</p>
          </div>
          <div className="this_trip_info">
            <div id="column">
              <p id="name_specify">Wyjazd</p>
              <p>
                {dateStart} godz. {TripELement.date.startHour} -{" "}
                {TripELement.date.endHour}
              </p>
              <p>{departures}</p>
            </div>
            <div id="column">
              <p id="name_specify">Powrót</p>
              <p>
                {" "}
                {dateEnd} godz. {TripELement.date.endHour} -{" "}
                {TripELement.date.backHour}
              </p>
              <p>{departures}</p>
            </div>
            <div id="column">
              <p id="name_specify">Wyżywienie</p>
              <p>{TripELement.board}</p>
            </div>
            <div id="column">
              <p id="name_specify">Cena za osobę</p>
              <p>{TripELement.pricePerPerson} zł</p>
            </div>
          </div>
        </div>
        <div className="box_people_input">
        {renderPepleDataInput}
        </div>
        <Summary price={TripELement.pricePerPerson} person={bookedPlaces}/>
      </ReservationContainer>
    </>
  );
};

export default Reservation;
