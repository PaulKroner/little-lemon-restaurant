import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main/main';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Menu from './components/Main/Menu/menu';
import Reservation from './components/Reservations/reservations';
import OrderOnline from './components/OrderOnline/orderOnline';
import About from './components/Main/About/about';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
      {/* <Nav />
      <Main />
      <Footer /> */}

      <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/orderonline" element={<OrderOnline />} />
          <Route path="/about" element={<About />} />
        </Routes>
      <Footer />

      {/* <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/about" element={<About />} />
      </Routes> */}
    </>

  );
}

export default App;
