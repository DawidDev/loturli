import React from "react";

import styled from "styled-components";

const SearchContainer = styled.div`
  width: 100%;
  height: 350px;
  background-color: silver;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 95%;
    max-width: 1100px;
    min-width: 400px;
    height: 90px;
    display: flex;
    justify-content: space-around;
    border-radius: 10px;
    background-color: #fff;

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

  @media (max-width: 768px) {
    height: auto;

    .box {
        width: 80%;
        height: auto;
        flex-wrap: wrap;
        background-color: transparent;
        margin: 20px 0;

        .item {
            width: 80%;
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
      </div>
    </SearchContainer>
  );
};

export default Search;
