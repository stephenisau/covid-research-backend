import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5rem;
  align-items: center;
`;

export const HeaderImage = styled.img`
  max-width: 500px;
`;

export const HeaderContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ContactUsText = styled.p`
  color: ${({ isEmail }) => (isEmail ? 'white' : 'rgb(167,3,15)')};
  margin: 0;
`;
