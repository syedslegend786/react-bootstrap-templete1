import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import Sections from './components/Sections';
import SubFooter from './components/SubFooter';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Sections />
      <Testimonials />
      <News />
      <Footer />
      <SubFooter />
    </div>
  );
}

export default App;
