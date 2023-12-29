import React from 'react';
import '../styles/home.css';
import Hero from '../components/homeComponents/Hero';
import Categories from '../components/homeComponents/Categories';

const Home = () => {  
  return (
    <>
      <div className='home'>
        <Hero />
      </div>
      <Categories />
    </>
  );
}

export default Home;
