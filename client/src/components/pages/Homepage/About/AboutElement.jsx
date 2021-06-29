import styled from 'styled-components';
//import FeaturePic from '../../images/featured3.jpg';

export const FeatureContainer = styled.div`
  height: 100vh;
  max-height: 600px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color:black;
  text-align: center;
  width: 90%;
  margin-top: -15%;
  margin-left: 5%;

  h2 {
    font-size: clamp(3rem, 5vw, 5rem);
    margin-bottom: 5rem;
  }

  p {
    margin-bottom: -20%;
    font-size: clamp(1rem, 1vw, 2rem);
    color: black;
  }
  h3 {
    font-size: clamp(2rem, 3vw, 3rem);
  }
`;
export const FeatureButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background: #ffc500;
  color: #000;
  transition: 0.2s ease-out;

  &:hover {
    color: #fff;
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
export const Date = styled.div`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  color: black;
  text-align: left;
  margin-left: 6%;
  
  h3 {
    font-size: clamp(2rem, 3vw, 3rem);
    float: left;
  }
  
`;

