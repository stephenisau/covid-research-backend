import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faBullhorn,
  faBomb,
  faGlobeAmericas
} from '@fortawesome/free-solid-svg-icons';

import {
  StyledFooter,
  FooterContainer,
  LogoText,
} from './styles'


const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FontAwesomeIcon size='4x' color="white" icon={faDollarSign} />
        <LogoText>
          ALL DONATIONS ARE SENT DIRECTLY TO PROJECTS.
        </LogoText>
      </FooterContainer>
      <FooterContainer>
        <FontAwesomeIcon size='4x' color="white" icon={faBullhorn} />
        <LogoText>
          GET YOUR PROJECT IN FRONT OF THE EYES IT NEEDS.
        </LogoText>
      </FooterContainer>
      <FooterContainer>
        <FontAwesomeIcon size='4x' color="white" icon={faBomb} />
        <LogoText>
          HELP US MITIGATE THE IMPACT OF COVID-19 CRISIS.
        </LogoText>
      </FooterContainer>
      <FooterContainer>
        <FontAwesomeIcon size='4x' color="white" icon={faGlobeAmericas} />
        <LogoText>
          LET US ANSWER THE CALL TOGETHER AS A GLOBAL COMMUNITY.
        </LogoText>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
