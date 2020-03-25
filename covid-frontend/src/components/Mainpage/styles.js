import styled from 'styled-components';

export const MainPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const VirusImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VirusImageCaption = styled.div`
  display: flex;
`;
export const VirusCases = styled.p`
  color: ${({ isDigit }) => (isDigit ? 'black' : 'rgb(167, 3, 15)')};
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: Roboto;
`;

export const VirusImage = styled.img`
  height: 500px;
  width: 500px;
`;
