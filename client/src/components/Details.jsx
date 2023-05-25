import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getDetails} from "../redux/actions";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { deleteGame } from "../redux/actions";
import Loading from "./Loading";
import styled from "styled-components";

export default function Details() {
  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const myVideogame = useSelector((state) => state.detail);
  const detailPlatform = myVideogame.platforms?.join(", ");
  const detailGenres = myVideogame.genres?.join(", ");

  

  if (Object.keys(myVideogame).length > 0 && loading) {
    setLoading(false);
  }
  
  async function handleDelete() {
    await axios.delete("/videogames/" + id);
    dispatch(deleteGame(id));
  }

  return (
    <MainDetail>
      {Object.keys(myVideogame).length > 0 && !loading ? (
        <div>
          <ContainerDetail>
            <Title>{myVideogame.name}</Title>
            <InfoDetail>
              <div>
                <InfoDetailH2>Plataformas: </InfoDetailH2>
                <InfoDetailP1>
                  {detailPlatform ? detailPlatform : "No tiene plataformas"}
                </InfoDetailP1>
              </div>
              <div>
                <InfoDetailH2>Generos: </InfoDetailH2>
                <InfoDetailP1>{detailGenres}</InfoDetailP1>
              </div>
              <div>
                <InfoDetailH2>Lanzamiento: </InfoDetailH2>
                <InfoDetailP2>{myVideogame.released}</InfoDetailP2>
              </div>
              <div>
                <InfoDetailH2>Rating: </InfoDetailH2>
                <InfoDetailRating>{myVideogame.rating}</InfoDetailRating>
              </div>
              <br />
            </InfoDetail>
            <GameDescription>
              <H2Description>Descripción</H2Description>
              <Description>
                  {myVideogame.description}
              </Description>
            </GameDescription>
            <Link to="/home">
              <Button>⇐ Volver</Button>
              {!Number(id) && (
              <ButtonEliminar onClick={handleDelete}>Eliminar</ButtonEliminar>)}
            </Link>
          </ContainerDetail>
          <ImageDetail src={myVideogame.image} alt="img not found" />
        </div>
      ) : (
        <Loading />
        
      )}
    </MainDetail>
  );
}

const ButtonEliminar = styled.div `
`

const MainDetail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: #151515;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

const ContainerDetail = styled.div`
  color: rgb(237, 237, 237);
  padding-top: 120px;
  width: 100%;
  height: 820px;
  position: absolute;
  z-index: 1;
  background: linear-gradient(90deg, #000000, #00000000);

  @media (max-width: 768px) {
    color: rgb(237, 237, 237);
    width: 100%;
    height: 161%;
    
  }
`;

const Title = styled.div`
  font-size: 85px;
  line-height: 70px;
  font-weight: 800;
  text-shadow: -3px 3px black;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    font-size: 50px;
  line-height: 50px;
  text-shadow: -3px 3px black;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  }

`;

const GameDescription = styled.div`
  margin-top: 103px;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-top: -150%;
   margin-left: -60%;
  }
  
`;

const H2Description = styled.h2`
  color: #ffc300;
  text-shadow: 1px 1px #000000;
  margin: 0 0 8px;
  margin-left: -80rem;

  @media (max-width: 768px) {
    margin-left: 10rem;
    margin-top: 100%
  }
`;

const Description = styled.div`
  display: flex;
  width: 500px;
  height: 320px;
  line-height: 22px;
  text-align: left;
  margin-left: 15rem;
  overflow-y: scroll;

  @media (max-width: 768px) {
    max-width: 55%;
    left: auto%
    margin-top: 100%
    margin-bottom: 50%
    overflow-y: scroll;
    margin-left: auto;
    
  }
`;

const InfoDetail = styled.div`
  display: flex;
  margin: 25px 4px 4px 20px;
  position: absolute;
  top: 13.7rem;
  left: 52rem;

  @media (max-width: 768px) {
    display: flex;
  flex-direction: column;
  margin: 0px 4px 4px 20px;
  position: relative;
  top: 2%;
  left: 3%
  }
`;

const InfoDetailH2 = styled.h2`
margin-left: 70px;
display: flex;
justify-content: display-start;
align-self: center;
text-align: center;
color: #ffc300;
text-shadow: 1px 1px #000000;

@media (max-width: 768px) {
  margin-left: 0px;
  font-size: 15px;
}
`;

const InfoDetailP1 = styled.p`
  max-width: 10px;
  margin-bottom: 8px;
  margin-left: 70px;

  @media (max-width: 768px) {
    margin-left: 0px;
    font-size: 15px;
  }
`;

const InfoDetailP2 = styled.p`
max-width: 90px;
margin-bottom: 8px;
margin-left: 70px;

@media (max-width: 768px) {
  margin-left: -10px;
  font-size: 15px;
}
`;

const InfoDetailRating = styled.p` 
max-width: 90px;
margin-bottom: 8px;
margin-left: 70px;

@media (max-width: 768px) {
  margin-left: -30px;
  font-size: 15px;
}
`

const Button = styled.button`
  width: 200px;
  height: 50px;
  font-size: 1.5rem;
  color: black;
  outline: 0;
  border: 0;
  border-radius: 8px;
  background-color: #ffc300;
  border: solid 1px black;
  cursor: pointer;
  margin-left: 70rem;
  margin-top: -10rem;
  

  &:hover {
    background-color: black;
    color: #ffc300;
    transition: all 0.2s ease;
  }

  @media (max-width: 768px) {
  margin-left: auto;
  margin-top: 10%;
  }
`;
const ImageDetail = styled.img`

width: 100vw;
height: 100vh;
position: absolute;
object-fit: fill;
filter: blur(4px);

@media  (max-width: 768px) {
  width: 100%;
  height: 175%;
  object-fit: cover;
  filter: blur(5px);
}
`;
