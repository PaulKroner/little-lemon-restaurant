import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main/main';
import Header from './components/Header/header';
import ConfirmedBooking from './components/Reservations/confirmed-booking/confirmed-booking';
import Nav from './components/Nav/nav';
import Menu from './components/Main/Menu/menu';
import Reservation from './components/Reservations/reservations';
import OrderOnline from './components/OrderOnline/orderOnline';
import About from './components/Main/About/about';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>

      <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/orderonline" element={<OrderOnline />} />
          <Route path="/about" element={<About />} />
          <Route path='/ConfirmedBooking' element={<ConfirmedBooking/>}/>
        </Routes>
      <Footer />

    </>
  );
}

export default App;