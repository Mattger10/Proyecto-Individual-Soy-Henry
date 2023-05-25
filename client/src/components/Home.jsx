import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideogames,
  filterVideogamesByGenres,
  filterCreated,
  orderByName,
  orderByRating,
  getGenres,
} from "../redux/actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import Loading from "./Loading";
import styled from "styled-components";
import landingImage from "../assets/fondonegro.webp";
import { useHistory } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const allGenres = useSelector((state) => state.genres);
  const allVideogames = useSelector((state) => state.videogames);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage, setVideogamesPerPage] = useState(15);
  const indexOfLastVideogame = currentPage * videogamesPerPage;
  const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage;
  const currentVideogames = allVideogames?.slice(
    indexOfFirstVideogame,
    indexOfLastVideogame
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const [loading, setLoading] = useState(true);
  if (allVideogames.length > 0 && loading) {
    setLoading(false);
  }

  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getVideogames());
  }

  const redirect = () => {
    history.push("/videogames");
  };

  function handleFilterGenres(e) {
    dispatch(filterVideogamesByGenres(e.target.value));
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  function handleRatingSort(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordenado ${e.target.value}`);
  }

  return (
    <Container>
      <Image src={landingImage} alt="" />
      <Container2>
        {allVideogames.length > 0 ? (
          <div>
            <Nav>
            <H1>Mattger GAMES</H1>
              <ButtonsContainer>
                  <ButtonCrear onClick={redirect}>Crear juego</ButtonCrear>
                  <ButtonRecargar onClick={(e) => {handleClick(e);}}>
                Recargar todos los juegos
              </ButtonRecargar>
              </ButtonsContainer>
            </Nav>
            <ContainerSyO>
              <Select onChange={(e) => handleSort(e)}>
                <Option value="asc">Ascendente</Option>
                <Option value="desc">Descendente</Option>
              </Select>
              <Select onChange={(e) => handleRatingSort(e)}>
                <Option value="Order-Rating">Ordenar por rating</Option>
                <Option value="Men-May">Menor rating</Option>
                <Option value="May-Men">Mayor rating</Option>
              </Select>
              <Select onChange={(e) => handleFilterGenres(e)}>
                <Option value="All">Todos los géneros</Option>
                {/* {allGenres?.map((e) => {
                  return <option value={e.name}>{e.name}</option>;
                })} */}
                <Option value="Action">Acción</Option>
                <Option value="Indie">Indie</Option>
                <Option value="Adventure">Aventura</Option>
                <Option value="RPG">RPG</Option>
                <Option value="Strategy">Estrategia</Option>
                <Option value="Shooter">Disparos</Option>
                <Option value="Casual">Casual</Option>
                <Option value="Simulation">Simulación</Option>
                <Option value="Puzzle">Puzzle</Option>
                <Option value="Arcade">Arcade</Option>
                <Option value="Platformer">Plataformas</Option>
                <Option value="Racing">Carreras</Option>
                <Option value="Massively Multiplayer">Multijugador</Option>
                <Option value="Sports">Deportes</Option>
                <Option value="Fighting">Peleas</Option>
                <Option value="Family">Familiar</Option>
              </Select>
              <Select onChange={(e) => handleFilterCreated(e)}>
                <Option value="All">Todos</Option>
                <Option value="Created">Creados</Option>
                <Option value="Existing">Existentes</Option>
              </Select>
            </ContainerSyO>
            
            <SearchBar />
            {allVideogames && (
            <Paginado
              videogamesPerPage={videogamesPerPage}
              allVideogames={allVideogames.length}
              paginado={paginado}
            />
          )}
            <VideogamesContainer>
              {currentVideogames?.map((videogame) => {
                return (
                  <Link to={`/details/${videogame.id}`}>
                    <Card
                      image={videogame.image}
                      name={videogame.name}
                      rating={videogame.rating}
                      genres={videogame.genres}
                    />
                  </Link>
                );
              })}
            </VideogamesContainer>
          </div>
        ) : (
          <Loading />
        )}
      </Container2>
     
    </Container>
  );
}


const VideogamesContainer = styled.div`
z-index: 1;
height: auto;
width: 100vw;
display: flex;
justify-content: center;
align-content: center;
align-items: center;
flex-wrap: wrap;

@media (max-width: 768px) {
margin-top: 4%
}
`;

const Container2 = styled.div`
z-index: 1;
height: 100%;
width: 100vw;
display: flex;
justify-content: center;
align-content: center;
align-items: center;
`;
const Image = styled.img`
height: 100vh;
  z-index: 0;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;

@media (max-width: 768px) {

} 
`;

const Container = styled.div`
height: 100%;
width: 100vw;
display: flex;
flex-direction: column;
align-content: center;
justify-content: center;
align-items: center;
`;

const H1 = styled.h1`
color: #FFC300;
font-size: 2rem;
justify-content: space-between;
text-align: left;
height: 5vh;
width: 100vw;
margin-top: 25px;
margin-left: 60px;

@media (max-width: 768px) {
font-size: 2rem;
line-height: 32px;
width: 100%;
margin-top: 1%;
margin-left: 3%;
}
`;

const ButtonsContainer = styled.ul `
display: flex;
  justify-content: flex-end;
  align-items: center;
  justify-content: space-between;
  padding: 0;

  @media (max-width: 768px) {
  
  }
`
const ButtonRecargar = styled.button`
background-color: #FFC300;
color: black;
border: none;
padding: 5px 5px;
border-radius: 5px;
cursor: pointer;
margin-right: 50px;
&:hover {
  background-color: #555;
}

@media (max-width: 768px) {
  background-color: #FFC300;
color: black;
padding: 2px 20px;
margin-right: 30px;
}
`;

const ButtonCrear = styled.button`
background-color: #FFC300;
color: #black;
border: none;
padding: 5px 10px;
border-radius: 5px;
cursor: pointer;
margin-right: 4px;
&:hover {
  background-color: #555;
}

@media (max-width: 768px) {
  padding: 10px 20px;
  margin-right: 10px;
}
`;



const Nav = styled.nav`
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  text-align: center;
  height: 5vh;
  width: 100vw;
  margin-top: px;
  margin-bottom: 15px;
  border: solid 1.5px;
  background-size: cover;
  backdrop-filter: blur(10px);
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('');

  @media (max-width: 768px) {
    height: 8vh;
    width: 95%;
    margin-top: 0px;
    margin-bottom: 100px;
  }
`

const ContainerSyO = styled.div`
@media (max-width: 768px) {
 margin-top: 30%
}
`
const Select = styled.select`
  z-index: 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 30px;
  margin-right: 40px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    z-index: 1;
    margin-top: 10px;
    margin-left: 100px;
    margin-bottom: 10px;
    display: block;
    width: 50%;
  }
`;

const Option = styled.option`
padding: 8px;
`;

