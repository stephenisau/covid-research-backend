import React from 'react';
import {
  MiddleSectionContainer,
  MapCaption,
  MapSection,
  WhoWhatContainer,
  IndividualContainer,
  TextHeader,
  Description
} from './styles';

const MiddleSection = () => (
  <MiddleSectionContainer>
    <MapSection>
      <MapCaption>Gloabal Covid-19 Cases:</MapCaption>
      <iframe
        width="400"
        height="300"
        frameBorder="0"
        scrolling="no"
        src="https://www.arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c"
      ></iframe>
    </MapSection>
    <WhoWhatContainer>
      <IndividualContainer>
        <TextHeader>What We Do:</TextHeader>
        <Description>
          We facilitate the connection between private investors & COVID-19
          projects. All donations are processed through stripe to get cash to
          the people who need it quickly.
        </Description>
      </IndividualContainer>
      <TextHeader>Who We Help:</TextHeader>
      <Description>
        We help any organized effort working to combat COVID-19 or its impacts.
        If you have one, or are working on one - reach out so we can help.
      </Description>
      <IndividualContainer></IndividualContainer>
    </WhoWhatContainer>
  </MiddleSectionContainer>
);

export default MiddleSection;
