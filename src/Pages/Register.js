import React from "react";

import Header from "../Components/Header";

import styled from "styled-components";

const RegisterContainer = styled.div`
  margin: 0 auto;
  padding: 40px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  max-width: 1100px;

  .column {
    margin: 0 10px;

    .box {
      min-width: 300px;
      max-width: 80%;
      max-height: 400px;
      margin-bottom: 30px;
      margin: 10px auto;
    }

    p {
      font-size: 15px;
      font-weight: 200;
      margin: 0;
    }

    input {
      height: 35px;
      width: 100%;
      background-color: #e0efec;
      border: none;
      padding: 5px 10px;
      outline: none;
    }
  }
  .btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 30px;

    button {
      width: 300px;
      max-width: 80%;
      border: none;
      height: 30px;
      background-color: #426f74;
      color: #fff;
      font-size: 18px;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;

    .box {
      width: 80vw;

      p {
        font-size: 20px;
      }

      input {
        margin-bottom: 15px;
        height: 45px;
      }
    }
  }
`;

const tableInputsLogin = [
  {
    title: "Login",
    name: "login",
    type: "text",
  },
  {
    title: "Hasło",
    name: "password",
    type: "passowrd",
  },
  {
    title: "Potwierdź hasło",
    name: "passowrd_2",
    type: "passowrd",
  },
  {
    title: "Poczta",
    name: "mail",
    type: "mail",
  },
];

const tableInputsPersonData = [
  {
    title: "Płeć",
    name: "male",
    type: "text",
  },
  {
    title: "Imię",
    name: "name",
    type: "text",
  },
  {
    title: "Nazwisko",
    name: "surname",
    type: "text",
  },
  {
    title: "Data urodzenia",
    name: "date_birth",
    type: "date",
  },
];

const tableInputsAdress = [
  {
    title: "Kod pocztowy",
    name: "code",
    type: "text",
  },
  {
    title: "Ulica",
    name: "street",
    type: "text",
  },
  {
    title: "Nr lokalu",
    name: "local",
    type: "text",
  },
  {
    title: "Telefon",
    name: "telephone",
    type: "text",
  },
];

const Register = () => {
  const column_1 = tableInputsLogin.map((item) => (
    <div className="box">
      <p>{item.title}</p>
      <input type={item.type} name={item.name} />
    </div>
  ));

  const column_2 = tableInputsPersonData.map((item) => (
    <div className="box">
      <p>{item.title}</p>
      <input type={item.type} name={item.name} />
    </div>
  ));

  const column_3 = tableInputsAdress.map((item) => (
    <div className="box">
      <p>{item.title}</p>
      <input type={item.type} name={item.name} />
    </div>
  ));

  return (
    <>
      <Header title={"Rejestracja"} />
      <RegisterContainer>
        <div className="column">{column_1}</div>
        <div className="column">{column_2}</div>
        <div className="column">{column_3}</div>
        <div className="btn">
          <button>Rejestruj</button>
        </div>
      </RegisterContainer>
    </>
  );
};

export default Register;
