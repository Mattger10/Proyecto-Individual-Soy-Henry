import React from "react";
import styled from "styled-components";
import landingImage from "../assets/fondoamarillo.webp";
import { useHistory } from "react-router-dom";

export default function LandinPage() {
  const history = useHistory();

  const redirect = () => {
    history.push("/home");
  };

  return (
    <Container>
      <Image src={landingImage} alt="" />
      <Title>Bienvenidos a Mattger GAMES</Title>
      <Button onClick={redirect}>Ingresar</Button>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  z-index: 0;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.h1`
  z-index: 1;
  color: white;
  margin-top: -50px;
  margin-bottom: 80px;
  font-size: 40px
`;
const Button = styled.button`
z-index: 1;
min-width: 300px;
  min-height: 60px;
  font-family: 'Nunito', sans-serif;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: white;
  background: ##FFC300;
  background: linear-gradient(90deg, #FFC300 0%, #FFC300 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px #FFC300;
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  
&::before {
content: '';
  border-radius: 1000px;
  min-width: calc(300px + 12px);
  min-height: calc(60px + 12px);
  border: 4px solid white;
  box-shadow: 0 0 60px #FFC300;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .3s ease-in-out 0s;
}

&:hover, &:focus {
  color: white;
  transform: translateY(-6px);
}

&:hover::before, &:focus::before {
  opacity: 1;
}

&::after {
  content: '';
  width: 30px; height: 30px;
  border-radius: 100%;
  border: 6px solid #FFC300;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

&:hover::after, &:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 300px;
    height: 300px;
    opacity: 0;
  }

}`;
