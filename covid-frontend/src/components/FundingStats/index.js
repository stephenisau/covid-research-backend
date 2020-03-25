import React from 'react';
import { Border, MissionStatementContainer } from '../MissionStatement/styles';
import {
  StatsCategory,
  StatsNumber,
  StatsContainer,
  FundingStatsContainer
} from './styles';

const FundingStats = () => (
  <FundingStatsContainer>
    <Border />
    <div style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
      <StatsContainer>
        <StatsCategory>Covid-19 Projects: </StatsCategory>
        <StatsNumber>292</StatsNumber>
      </StatsContainer>
      <StatsContainer>
        <StatsCategory>Covid-19 Projects Funded: </StatsCategory>
        <StatsNumber>0</StatsNumber>
      </StatsContainer>
    </div>
    <Border />
  </FundingStatsContainer>
);

export default FundingStats;
