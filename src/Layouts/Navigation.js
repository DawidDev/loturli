import React, { useState } from "react";

import styled from "styled-components";

import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const NavigationStyled = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  color: #515151;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1400px;
  margin: 0 auto;
  z-index: 5;

  .logo {
    font-size: 44px;
    font-weight: 500;
    letter-spacing: 5px;
    width: 30%;
    color: #426f74;
    padding-left: 10px;
    float: left;
    z-index: 1;
  }

  ul.nav {
    width: auto;
    list-style-type: none;
    padding: 0;
    display: flex;
    height: 100%;

    li {
      margin: 0px 10px;

      a {
        text-decoration: none;
        color: #515151;
        outline: none;
      }
    }
  }

  .account {
    position: absolute;
    right: 5%;
    font-size: 25px;
  }

  .call {
    padding: 0 10px;
    position: absolute;
    right: 10%;
    display: flex;
    align-items: center;

    i {
      margin-right: 10px;
    }
  }

  .menu_btn {
    display: none;
    position: absolute;
    right: 3%;
    font-size: 3rem;

    :hover {
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    color: ${props => props.menuRWD ? '#fff' : 'black'};
    transition: 0.25s;
    background-color: #fff;
    height: 50px;
    box-shadow: 0px 14px 16px -19px rgba(66, 68, 90, 1);
 

    .logo {
      width: auto;
      transition: 0.35s;
      font-size: 2rem;
      color: ${props => props.menuRWD ? '#fff' : '#426f74'};
    }

    ul.nav {
      top: 0;
      box-sizing: border-box;
      margin: 0;
      position: fixed;
      background-color: #426F74;
      width: 100%;
      height: 100vh;
      transform: ${props => props.menuRWD ? 'translateX(0%)' : 'translateX(100%)'};
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  

      li {
        margin: 2rem 0;
        font-size: 2rem;
        
        a {
          color: #fff;
        }
      }
    }

    .account {
      right: 17%;
      font-size: 1.8rem
    }

    .call {
      right: 25%;
      font-size: 1.5rem;

      p {
        display: none;
      }
    }

    .menu_btn {
    display: block;
    font-size: 2.2rem;
  }
  }
`;

const Navigation = () => {


  const [showMenuRwd, setShowMenuRwd] = useState(false);
  const handleRWDMenu = () => setShowMenuRwd(prevValue => !prevValue)
  console.log(showMenuRwd)


  return (
    <NavigationStyled menuRWD = {showMenuRwd}>
      <div className="logo">LOTURLI</div>
      <ul className="nav">
        <li>
          <NavLink to="/" onClick={handleRWDMenu} >HOME</NavLink>
        </li>
        <li>
          <NavLink to="/offer" onClick={handleRWDMenu} >OFFER</NavLink>
        </li>
        <li>
          <NavLink to="/promotion" onClick={handleRWDMenu} >PROMOTION</NavLink>
        </li>
        <li>
          <NavLink to="/lastminute" onClick={handleRWDMenu} >LASTMINUTE</NavLink>
        </li>
      </ul>
      <div className="call">
        <i className="bi bi-telephone"></i><p>665 665 665</p>
      </div>
      <div className="account">
        <i className="bi bi-person"></i>
      </div>
      <i onClick={handleRWDMenu} className="menu_btn bi bi-list"></i>
    </NavigationStyled>
  );
};

export default Navigation;
