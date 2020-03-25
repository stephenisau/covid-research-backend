import React from 'react';
import Registration from '../Forms/Registration';
import MainDescription from '../MainDescription';
import coronavirus from '../../assets/images/coronavirus.jpg';
import {
  MainPageContainer,
  VirusImage,
  VirusCases,
  VirusImageCaption,
  VirusImageContainer
} from './styles';
// import "./index.scss";

const Mainpage = props => (
  <MainPageContainer>
    <div className="row">
      <div className="col-md-6">
        <Registration />
      </div>
      <div className="col-md-6">
        <VirusImageContainer>
          <VirusImageCaption>
            <VirusCases isDigit={false}>CoronaVirus Cases:</VirusCases>
            <VirusCases isDigit={true}> 378,679</VirusCases>
          </VirusImageCaption>
          <VirusImage src={coronavirus}></VirusImage>
        </VirusImageContainer>
      </div>
    </div>
  </MainPageContainer>
);

export default Mainpage;
