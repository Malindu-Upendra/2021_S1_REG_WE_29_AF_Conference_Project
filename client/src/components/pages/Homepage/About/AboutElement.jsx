import styled from 'styled-components';
//import FeaturePic from '../../images/featured3.jpg';


export const FeatureContainer = styled.div`
  height: 100vh;
  max-height: 650px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:black;
  text-align: center;
  width: 90%;
  margin-left: 5%;
  
  
  

  h2 {
    font-size: clamp(3rem, 5vw, 5rem);
    margin-bottom: 5rem;
    margin-top: -20%;
  }

  p {
    margin-bottom: -15%;
    font-size: clamp(1rem, 1vw, 2rem);
    color: black;
  }
  h3 {
    font-size: clamp(2rem, 3vw, 3rem);
  }
`;


export const Date = styled.div`
  font-size: clamp(2rem, 2.5vw, 3rem);
  color: black;
  text-align: left;
  margin-left: 42.5%;
  margin-top: -13%;
  
  
  
  h3 {
    font-size: clamp(2rem, 3vw, 3rem);
    float: left;
  }
  
`;

export const Sdate = styled.div`
  font-size: clamp(1rem, 1.5vw, 3rem);
  margin-bottom: 100px;
  margin-left: 25%;
    

`;

