import React from 'react';
import {
  HeaderContainer,
  HeaderImage,
  HeaderContactInfo,
  ContactUsText
} from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage
        src={
          'https://images.clickfunnels.com/69/ed5005a321447a8eefaf66fa246833/yes.png'
        }
      />
      <HeaderContactInfo>
        <ContactUsText isEmail={false}>Contact Us:</ContactUsText>
        <ContactUsText isEmail={true}>CovidResearchFund@gmail.com</ContactUsText>
      </HeaderContactInfo>
    </HeaderContainer>
  );
};

export default Header;
