import React from 'react';
import './main.css';
import { useNavigate } from "react-router-dom";
import Menu from './Menu/menu';

const Main = () => {

  const navigate = useNavigate();

  const ReserveTable = () => {
    navigate('/reservation');
  }


  return (
    <div>
      <div className="main-layout">
        <header className="main-header">
          <h1>Little Lemon Restaurant</h1>
        </header>

        <span className="main-text-content">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        </span>

        <button className="main-button" onClick={ReserveTable}>
          Reserve a table
        </button>
      </div>

    <Menu />
    </div>
  );
};

export default Main;