import React from "react";

import styled from "styled-components";

const GuideContainer = styled.div`
  font-size: 1rem;
  letter-spacing: 2px;
  margin: 20px 0;
  padding: 10px 40px;
  border-radius: 10px;
  color: #fff;
  background-color: #426F74;
  display: flex;
  justify-content: space-between;
  
  button {
      padding: 3px 10px;
      font-size: 1rem;
      background-color: transparent;
      outline: none;
      border: none;
      text-transform: uppercase;
      letter-spacing: 3px;
      color: #fff;

      a {
        color: #fff;
        text-decoration: none;
      }
  }

  @media (max-width: 768px) {
      margin: 10px 0;
      padding: 10px 10px;
      text-align: center;
      font-size: 0.75rem;
      flex-direction: column;

      button {
          margin-top: 10px;
      }
  }

  
`;

const GuideBar = () => {
  return (
    <GuideContainer>
      <span>Aktualne wytyczne dotyczące podróży</span>
      <button> <a href="#">Sprawdź teraz</a> <i class="bi bi-info-square"></i></button>
    </GuideContainer>
  );
};

export default GuideBar;
