import React, { useState } from "react";
import styled from "styled-components";

// Import komponentów
import TitleSection from "../Home_page/TitleSection";
import Atributes from "../Atributes";
import NewsLetter from "../Home_page/NewsLetter";

// React router dom
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

// Symulacyjna baza danych
import Elements from "../../Config/DataBase";

const HeaderContainer = styled.div`
  background-color: #426f74;
`;

const TripContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  h1 {
    color: #fff;
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 2px;
    padding: 20px 0;
    margin: 0;
  }

  .demo_section {
    width: 100%;
    min-height: 600px;
    display: flex;
    margin-top: 20px;

    .slider {
      background-color: silver;
      flex: 2;
      margin-right: 20px;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }

    .information {
      flex: 1;
      background-color: #e0efec;
      padding: 20px;

      h2 {
        font-size: 1.85rem;
        font-weight: 400;
        margin: 0;
      }

      .rate {
        font-size: 1.2rem;
        font-weight: 200;
        margin: 0;
      }

      #name_category {
        font-size: 1.1rem;
        font-weight: 400;
        margin-bottom: 5px;
      }

      .box_specify {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 200;
      }

      .price {
        font-size: 1.75rem;
        font-weight: 400;
      }

      .avaible_places {
        font-size: 1.1rem;
        font-weight: 200;
      }

      .btn_box {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          border-radius: 0;
          outline: none;
          height: 35px;
          background-color: #426f74;
          border: none;
          color: #fff;
          margin: 10px 10px;
          width: 35px;
          font-size: 1rem;

          a {
            text-decoration: none;
            color: #fff;
          }
        }

        .book {
          width: 50%;
          font-size: 1rem;
          letter-spacing: 1px;
        }

        p {
          font-size: 1.85rem;
          font-weight: 200;
        }
      }
    }
  }

  #link_back {
    text-decoration: none;
    color: #515151;
    font-weight: 200;
    display: block;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 0 10px;

    h1 {
      font-size: 1.5rem;
    }

    .demo_section {
      display: block;

      .slider {
        margin: 0 auto;
        height: 300px;
      }

      .information {
        h2 {
          font-size: 1.35rem;
        }
        .rate {
          font-size: 1rem;
        }

        .price {
          margin-top: 10px;
          margin-bottom: 0;
        }

        .avaible_places {
          margin: 0;
        }

        .btn_box {
          height: 50px;
          margin-top: 10px;

          button {
            height: 30px;
            width: 30px;
          }

          .book {
            width: 70%;
          }
        }
      }
    }
  }
`;

const GalleryContainer = styled.div`
  width: 100%;
  background-color: #e0efec;
  padding: 30px 0;

  .gallery {
    margin: 0 auto;
    max-width: 1400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .item {
      max-width: 200px;
      width: 100%;
      height: 200px;
      border-radius: 20px;
      overflow: hidden;
      margin: 10px;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    .gallery {
      justify-content: center;
      .item {
        max-width: 70px;
        height: 70px;
        margin: 5px;
        border-radius: 7px;
      }
    }
  }
`;

const DescriptionContainer = styled.div`
  display: flex;

  .box_text {
    width: 65%;
    padding: 0 20px;
    font-weight: 200;
  }

  .map {
    width: 35%;
    background-color: #426f74;
    height: 300px;
    margin: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .box_text {
      width: 100%;
    }

    .map {
      width: 90%;
      height: 150px;
      margin: 20px auto;
    }
  }
`;

const AtributesContainer = styled.div`
  .atribute_box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .atribute {
    border: 1px solid #426f74;
    padding: 5px 15px;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 200;
    margin: 10px;

    i {
      margin-right: 10px;
      font-size: 1.3rem;
    }

    p {
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    .atribute {
      font-size: 0.8rem;
      padding: 2px 10px;

      i {
        margin-right: 5px;
        font-size: 1.1rem;
      }
    }
  }
`;

const Trip = () => {
  const { id } = useParams();
  const TripELement = Elements[id - 1];

  // Obsługa wyboru ilości miejsc do rezerwacji
  const [bookNumber, setBookNumber] = useState(0);
  const handleBook = (type) => {
    switch (type) {
      case "+":
        if (bookNumber < TripELement.avaiblePlaces)
          setBookNumber((prevValue) => prevValue + 1);
        break;
      case "-":
        if (bookNumber > 0) setBookNumber((prevValue) => prevValue - 1);
        break;
      default:
        break;
    }
  };

  const dateStart = `${TripELement.date.startDay}.${TripELement.date.startMonth}.${TripELement.date.startYear}`;
  const dateEnd = `${TripELement.date.endDay}.${TripELement.date.endMonth}.${TripELement.date.endYear}`;

  console.log(TripELement.date);

  const galleryRender = TripELement.imagesGallery.map((item) => (
    <div className="item">
      <img src={Elements[id-1].img} alt={TripELement.nation} />
    </div>
  ));

  const atributesRender = TripELement.atributes.map((index) => (
    <div className="atribute" id={Atributes[index].id}>
      <i class={Atributes[index].iconClass}></i>
      <p>{Atributes[index].name}</p>
    </div>
  ));



  return (
    <>
      <HeaderContainer>
        <TripContainer>
          <h1>{TripELement.nameOfObject}</h1>
        </TripContainer>
      </HeaderContainer>
      <TripContainer>
        <Link id="link_back" to="/offer">
          Powrót do listy ofert
        </Link>
        <div className="demo_section">
          <div className="slider">
            <img src={Elements[id-1].img} />
          </div>
          <div className="information">
            <h2>{TripELement.nameOfObject}</h2>
            <p className="rate">Nasza ocena: {TripELement.ourRate}/10</p>
            <p id="name_category">Wyjazd</p>
            <p className="box_specify">
              {dateStart} godz. {TripELement.date.startHour} -{" "}
              {TripELement.date.endHour}
            </p>
            <p className="box_specify">Z: Poznań, Wrocław, Bydgoszcz, (+3)</p>
            <p id="name_category">Powrót</p>
            <p className="box_specify">
              {dateEnd} godz. {TripELement.date.endHour} -{" "}
              {TripELement.date.backHour}
            </p>
            <p className="box_specify">Do: Poznań, Bydoszcz</p>
            <p className="price">Cena: {TripELement.pricePerPerson} zł/os</p>
            <p className="avaible_places">
              Liczba dostępnych miejsc: {TripELement.avaiblePlaces}
            </p>
            <div className="btn_box">
              <button onClick={handleBook.bind(this, "+")}>+</button>
              <p>{bookNumber}</p>
              <button onClick={handleBook.bind(this, "-")}>-</button>
              <button className="book">
                <Link to={`/offer/reservation/${TripELement.id}/${bookNumber}`}>Rezerwuj miejsca</Link>
              </button>
            </div>
          </div>
        </div>
      </TripContainer>
      <TitleSection title={"Galeria obiektu"} />
      <GalleryContainer>
        <div className="gallery">{galleryRender}</div>
      </GalleryContainer>
      <TitleSection title={"Opis oferty"} />
      <TripContainer>
        <DescriptionContainer>
          <div className="box_text">
            <p>
              {TripELement.nation}, {TripELement.location},{" "}
              {TripELement.nameOfObject}
            </p>
            <p id="description">{TripELement.description}</p>
          </div>
          <div className="map"></div>
        </DescriptionContainer>
      </TripContainer>
      <TitleSection title={"Zalety obiektu"} />
      <AtributesContainer>
        <TripContainer>
          <div className="atribute_box">{atributesRender}</div>
        </TripContainer>
      </AtributesContainer>
      <NewsLetter />
    </>
  );
};

export default Trip;
