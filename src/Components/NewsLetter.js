import React from "react";

import styled from "styled-components";

const NewsLetterContainer = styled.div`
  background-color: #426F74;
  color: #fff;
  margin-top: 40px;
  text-align: center;
  padding: 20px;

  h4 {
      margin: 0;
      font-weight: 400;
      font-size: 1.75rem;
  }

  p {
      font-size: 1rem;
      font-weight: 200;
  }

  button {
    font-size: 1.1rem;
    font-weight: 200;
    background-color: transparent;
    border: 1px solid #fff;
    outline: none;
    color: #fff;
    transition: 0.25s;

    :hover {
        background-color: #fff;
        color: #426F74;
    }
  }

  input {
      font-size: 1rem;
      outline: none;
      border: none;
      margin-right: 20px;
      color: #426F74;
    }

    button, input {
        border-radius: 7px;
        padding: 5px 15px;
        height: 40px;
    }

  @media (max-width: 768px) {
    font-size: 1rem;

    .box {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        input {
            width: 100%;
            margin-right: 0;
            margin-bottom: 20px;
            text-align: center;
        }

        button {
            width: 80%;
        }
    }
  }
`;

const NewsLetter = () => {
  return (
    <NewsLetterContainer>
      <h4>Zapisz się na newsletter Loturli.pl</h4>
      <p>Zyskaj okazję na zdobycie świetnych okazji w wyjątkowych cenach. Jedynie dla użytkowników korzystających z newslettera.</p>
      <div className="box">
          <input type="text" placeholder="e-mail"/>
          <button>Zapisz mnie</button>
      </div>
    </NewsLetterContainer>
  );
};

export default NewsLetter;
