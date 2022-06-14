import React from "react";
import styled from "styled-components";

const SummaryContainer = styled.div`
    text-align: center;
    p {
        font-size: 1.2rem;
        font-weight: 200;
        margin: 5px;

        span{
            color: #426F74;
            font-weight: 300;
            font-size: 1.3rem;
        }
    }

    button {
        background-color: #426F74;
        font-size: 1.2rem;
        color: #fff;
        padding: 10px 70px;
        border-radius: 10px;
        outline: none;
        border: none;
    }

    #info {
        width: 300px;
        margin: 0 auto;
        font-size: 0.75rem;
        font-weight: 100;
        text-align: justify;
        margin-top: 20px;
        margin-bottom: 40px;
    }
    
`;

const Summary = ({ price, person }) => {
  const summaryPrice = price * person;
  return (
    <SummaryContainer>
      <p>Liczba rezerwowanych miejsc: <span>{person}</span></p>
      <p>Cena za osobę: <span>{price} zł</span></p>
      <p>Całkowity koszt: <span>{summaryPrice}</span>zł</p>
      <button>Wyślij zgłoszenie</button>
      <p id="info">
        Po wysłaniu zgłoszenia dostaniesz od nas wiadomość w ciągu 24h na swój
        adres pocztowy podany podczas rejestracji ze wszystkimi szczegółami oraz
        instrukcją dokonania płatności. Płatności możesz dokonać za pomocą PayU
        wygodnym dla siebie sposobem.
      </p>
    </SummaryContainer>
  );
};

export default Summary;
