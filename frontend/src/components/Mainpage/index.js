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
          <VirusImage src={"https://covid-research.s3.us-east-2.amazonaws.com/coronavirus.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIHM7P3ieVL4q1Np2glLaqj7zccRJIkukLTspsfb4568pAiEA3Xt4AOLm%2FiuXgKZnqXeZDxMpK%2BI1Jkddzl6twaAEhbsq8wEIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODUxMzY4MjQzNDQiDHKmut1tsMe%2BI6HITSrHAUztv5wMw0xk10yuWKoO8NbsFtCELuJFLCru3mdR%2F8%2FNfDp05sZLYPpEKF9DRdRT1zGnoYnwhbhiReWawvzAFXwH1xJjIJdK9SFJPnNWKqCZ41SuY%2B4EP%2B3zE%2BhBrJQ68eFJR%2FBLF%2BxpwoAx%2Fbb8E6fdeEeVGjDY1hYoKOJbKQVbNN3Xq%2BHnC1dwU4a%2FdFlmDoXCxddNhesKrbsvdHDhesYXh8yeIqsIFO9xdR%2BLlMsd3pUIIAf%2BJ2JzsGcLA7FJBAvxeHBlsq8w4tzx8wU68AJs1esThfDuEq%2FY8vZOuerjjD5aJLAScLbrBxRX3bZGTOgQ8dXqLKB9hsYCPBBssHWVAxWstNVfhAVAUWyC1St%2FR8S9i2wbHKYZcpS%2F3aT9PJ8ffSBQ2N4ityv9OEDrXy2u8dMWnaxiYMWhxVUGdty03QIynDPgVY1wks%2BetyHw95MzQXYTwJq8Lx0%2FMGS628euC1miLRPIlYm7ijkMcbU7GxLUmXTUJQxtdeBw0ZbNG3irKMyU%2F07awl%2BG4Frf4FzJlM6xENUZYTXOSV6eIwSPOEj42n5SmXIc%2FV5m7tKU1kOxxs%2Fkx%2BZPOK9xPX7A76DjDjEaP0d66dzh5OpPrSBuLoWkHe2aNKi5ajRyym%2BYebNCP5x%2FldHKQ%2BT8%2FcnyiZgz%2BWC0WrPRBP3QuK1Y3TPvD4tkIZDH9zsygBPI0bFVGSkUbtQDJKmxrKjUGu1aBCuj1C88gHrgF%2Bt0%2BZI%2F2owYEw686lMIfYUjYTMpu0oMpw%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200326T100831Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASWGYDYAMBDJTOO7S%2F20200326%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=b860c67ad55686be045aa8dfa04e8fa43e2a623e1d32ecd9d040e5e203cafbd1"}></VirusImage>
        </VirusImageContainer>
      </div>
    </div>
  </MainPageContainer>
);

export default Mainpage;
