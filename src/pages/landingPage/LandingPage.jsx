import React from 'react';
import Header from './Header';
import Main from './Main';
import Navbar from '../../components/navbarAndFooter/Navbar';
import Footer from '../../components/navbarAndFooter/Footer';
import Chat from '../../components/utilities/Chat';

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Chat />
      <Footer />
    </div>
  )
}

export default LandingPage