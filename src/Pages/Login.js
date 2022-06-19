import React from "react";
import Header from "../Components/Header";

import { Link } from "react-router-dom"; 

import styled from "styled-components";

const LoginContainer = styled.div`
  border: 1px solid red;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .box {
    width: 300px;
    max-width: 80%;
    display: flex;
    flex-wrap: wrap;
    max-height: 400px;
    margin-bottom: 30px;

    p {
        font-size: 15px;
        font-weight: 200;
        margin: 0;
    }
    
    input {
        height: 35px;
        width: 100%;
        background-color: #E0EFEC;
        border: none;
        padding: 5px 10px;
        outline: none;
    }
  }

  button {
    width: 300px;
    max-width: 80%;
    border: none;
    height: 30px;
    background-color: #426F74;
    color: #fff;
    font-size: 18px;
  }

  .info {
    font-size: 13px;
    font-weight: 200;
  }

  a {
    color: #426F74;
    text-decoration: none;
    font-weight: 300;
  }
`;

const Login = () => {
  return (
    <>
      <Header title={"Logowanie"} />
      <LoginContainer>
        <div className="box">
          <p>Login</p>
          <input type="text" />
        </div>
        <div className="box">
            <p>Hasło</p>
        <input type="password" />
        </div>
        <button>Zaloguj</button>
        <p className="info">Nie masz jeszcze u nas konta? Przejdź do <Link to={'/register'}>rejestracji</Link>.</p>
      </LoginContainer>
    </>
  );
};

export default Login;
