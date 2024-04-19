import React from 'react';
import './main.css';
import { useNavigate } from "react-router-dom";
import Menu from './Menu/menu';
import restaurtantfood from '../../assets/restauranfood.jpg';

const Main = () => {

  const navigate = useNavigate();

  const ReserveTable = () => {
    navigate('/reservation');
  }


  return (
    <div className="d-flex justify-content-center flex-column p-2 mt-5 mb-5">
      <div className="main-layout container d-flex justify-content-center p-5 w-75">
        <span className="d-flex flex-column justify-content-around align-itmes-center">
          <header>
            <h1 className="main-header">Little Lemon Restaurant</h1>
          </header>

          {/* <span className="main-text-content">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua.
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
          </span> */}

          <button className="main-button w-75" onClick={ReserveTable}>
            Reserve a table
          </button>
        </span>

        <span className="col">
          <img className="main-pic" src={restaurtantfood} alt="" />
        </span>

      </div>

      <Menu />
    </div>
  );
};

export default Main;