import React from 'react';
import {
  MissionStatementContainer,
  Border,
  MissionStatementText
} from './styles';

const MissionStatement = () => (
  <MissionStatementContainer>
    <Border />
    <MissionStatementText>
      Our mission is to help projects fighting against COVID-19 get the funding
      they need.
    </MissionStatementText>
    <Border />
  </MissionStatementContainer>
);

export default MissionStatement;
