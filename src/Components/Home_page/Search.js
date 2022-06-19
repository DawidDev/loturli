import React from "react";

import styled from "styled-components";

import img1 from  "../../Images/img1.jpg"

const SearchContainer = styled.div`
  width: 100%;
  height: 350px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
 
  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .box {
    width: 95%;
    max-width: 1100px;
    min-width: 400px;
    height: 90px;
    display: flex;
    justify-content: space-around;
    border-radius: 10px;
    background-color: #fff;
    position: relative;

    .item {
      width: 20%;
      height: 100%;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;

      p {
        margin: 0;
        font-size: 15px;
        color: #515151;
        font-weight: 200;
      }

      input {
        background-color: #f1f1f1;
        border: none;
        outline: none;
        width: 100%;
        border-radius: 5px;
        color: #3d7a7f;
        padding: 7px 10px;
        font-size: 15px;
      }
    }
  }
  button {
    position: absolute;
    bottom: 0px;
    transform: translateY(130%);
    background-color: #426F74;
    color: #f1f1f1;
    padding: 5px 10px;
    font-size: 15px;
    border-radius: 5px;
    border: none;
  }

  @media (max-width: 768px) {
    height: auto;

    .box {
        width: 80%;
        min-width: auto;
        height: auto;
        flex-wrap: wrap;
        background-color: transparent;
        margin: 20px 0;
        padding-bottom: 50px;

        .item {
            width: 100%;
            background-color: #fff;
            margin-bottom: 10px;
            border-radius: 10px;
            padding: 20px;

            p {
                font-size: 20px;
                margin-bottom: 10px;
            }

            input {
                font-size: 20px;
            }
        }

        button {
          transform: translateY(0);
          width: 80%;
          height: 40px;
          font-size: 24px;
        }
    }

  }
`;

const Item = ({title, typeInput}) => (
  <>
    <div className="item">
      <p>{title}</p>
      <input type={typeInput} />
    </div>
  </>
);

const Search = () => {
  return (
    <SearchContainer>
      <div className="box">
       <Item title={'Dokąd chcesz jechać?'} typeInput={'text'}/>
       <Item title={'Kiedy?'} typeInput={'date'}/>
       <Item title={'Ile osób?'} typeInput={'number'}/>
       <Item title={'Skąd wyjazd?'} typeInput={'text'} />
       <button>Szukaj</button>
      </div>
      <img src={img1} />
    </SearchContainer>
  );
};

export default Search;
