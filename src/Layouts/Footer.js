import React from "react";

import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: #f2f2f2;
  padding-top: 50px;

  .content {
    max-width: 1400px;
    justify-content: center;
    display: flex;
    margin: 0 auto;

    .column {
      width: 100%;
      padding: 10px 20px;

      h5,
      p {
        font-size: 1.15rem;
        font-weight: 300;
        margin: 0;
        margin-bottom: 10px;
      }

      a,
      .info {
        display: block;
        color: #5d5d5d;
        text-decoration: none;
        font-weight: 200;
        font-size: 1rem;
        margin: 0;
      }

      button {
        font-size: 1.3rem;
        padding: 7px 15px;
        border: 1.5px solid #426f74;
        background-color: transparent;
        border-radius: 7px;
        margin-top: 20px;
        color: #426f74;
      }
    }
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      text-align: center;
      .column {
        width: 80%;
        margin: 0 auto;
        padding: 10px;

        h5,
        p {
          font-size: 1.2rem;
        }

        button {
          width: 100%;
        }
      }
    }
  }

  .copyright {
        font-size: 0.75rem;
        background-color: #E0EFEC;
        font-weight: 100;
        text-align: center;
        margin: 0;
        padding: 5px;
    }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="content">
        <div className="column">
          <h5>Loturli.pl</h5>
          <a href="#">Pomoc i kontakt</a>
          <a href="#">Jak rezerwować</a>
          <a href="#">O firmie</a>
          <a href="#">Polityka prywatności</a>
          <a href="#">Regulamin</a>
          <a href="#">Mapa serwisu</a>
        </div>
        <div className="column">
          <p>Dla klientów</p>
          <a href="#">Wycieczki fakultatywne</a>
          <a href="#">Testy na COVID-19</a>
          <a href="#">Ubezpieczenia</a>
          <a href="#">Pogoda</a>
          <a href="#">Reklamacje</a>
          <a href="#">Internet na wakacje</a>
        </div>
        <div className="column">
          <p>Kontakt</p>
          <p className="info">Warszawa 66-62</p>
          <p className="info">ul. Małkowska 3</p>
          <p className="info">tel: 555 555 555</p>
          <p className="info">poczta: kontakt@loturli.pl</p>
          <button>Formularz kontaktowy</button>
        </div>
      </div>
      <div className="copyright">
          <p>Opublikowane na stronach www.loturli.pl informacje lub ceny nie stanowią oferty w rozumieniu przepisów kodeksu cywilnego.
© 2022 Loturli.pl S.A.</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
