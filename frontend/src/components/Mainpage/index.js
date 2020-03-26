import React from 'react';
import Registration from '../Forms/Registration';
import MainDescription from '../MainDescription';
// import coronavirus from '../../assets/images/coronavirus.jpg';
import {
  MainPageContainer,
  VirusImage,
  VirusCases,
  VirusImageCaption,
  VirusImageContainer
} from './styles';

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
          <VirusImage src={"https://covid-research-fund.s3-us-west-1.amazonaws.com/coronavirus.jpg"}></VirusImage>
        </VirusImageContainer>
      </div>
    </div>
  </MainPageContainer>
);

export default Mainpage;
