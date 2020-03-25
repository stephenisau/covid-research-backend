import React from 'react';
import Header from '../Header';
import Mainpage from '../Mainpage';
import Footer from '../Footer';
import MissionStatement from '../MissionStatement'
import MiddleSection from '../MiddleSection'
import FundingStats from '../FundingStats'

const Home = () => {

  return (
    <>
      <div className="container">
        <Header />
        <Mainpage />
        <MissionStatement/>
        <MiddleSection/>
        <FundingStats/>
      </div>
      <Footer />
    </>
  )
}

export default Home;