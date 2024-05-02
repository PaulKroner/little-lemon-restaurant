import React from 'react';
import './main.css';
import { useNavigate } from "react-router-dom";
import Menu from './Menu/menu';
import restaurtantfood from '../../assets/restauranfood.jpg';
import Testimonials from './Testimonials/testimonials';

const Main = () => {

  const navigate = useNavigate();

  const ReserveTable = () => {
    navigate('/reservation');
  }


  return (
    <div className="d-flex justify-content-center flex-column p-1 mt-4">
      <div className="main-layout container d-flex justify-content-center mb-5">
        <span className="d-flex flex-column justify-content-around align-itmes-center">
          <header>
            <h1 className="main-header display-1">Little Lemon Restaurant</h1>
          </header>

          <div className="d-flex justify-content-center">
            <button className="desktop-button main-button" onClick={ReserveTable}>
              Reserve a table
            </button>
          </div>

        </span>

        <span className="d-flex justify-content-center align-itmes-center">
          <img className="main-pic img-fluid" src={restaurtantfood} alt="" />
        </span>

        <div className="d-flex justify-content-center mobile-button-box">
          <button className="mobile-button main-button" onClick={ReserveTable}>
            Reserve a table
          </button>
        </div>

      </div>

      <Menu />
      <Testimonials />
    </div>
  );
};

export default Main;