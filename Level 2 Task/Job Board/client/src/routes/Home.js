import React from 'react';
import '../styles/home.css';
import Hero from '../components/homeComponents/Hero';
import Categories from '../components/homeComponents/Categories';
import Jobs from '../components/homeComponents/Jobs';

const Home = () => {  
  return (
    <>
      <div className='home'>
        <Hero />
      </div>
      <Categories />
      <div className="home f-jobs">
        <Jobs />
      </div>
    </>
  );
}

export default Home;
