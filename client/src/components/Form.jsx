import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { getGenres, postVideogames, getPlatforms } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import validation from "../redux/validations";
import styled from "styled-components";



export default function VideogameCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const platformsList = useSelector((state) => state.platforms);
  const genres = useSelector((state) => state.genres);

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    image: "",
    platforms: [],
    genres: [],
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getPlatforms());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelect(e) {
    if (!input.platforms.includes(e.target.value)) {
      setInput({
        ...input,
        platforms: [...input.platforms, e.target.value],
      });
      setErrors(
        validation({
          ...input,
          platforms: [...input.platforms, e.target.value],
        })
      );
    } else {
      setInput({
        ...input,
      });
    }
  }

  function handleDeletePlatforms(e) {
    setInput({
      ...input,
      platforms: input.platforms.filter((el) => el !== e),
    });
  }

  function handleSelectGenres(e) {
    //Verifico que no puedam seleccionarse repetidos
    if (!input.genres.includes(e.target.value)) {
      //Si el genero seleccionado no esta en el array, entonces incluilo
      setInput({
        ...input,
        genres: [...input.genres, e.target.value], //==>>Traigo lo que ya tengo y lo concateno
      });
      setErrors(
        validation({
          ...input,
          genres: [...input.genres, e.target.value],
        })
      );
    } else {
      setInput({
        ...input,
      });
    }
  }

  function handleDeleteGenres(e) {
    setInput({
      ...input,
      genres: input.genres.filter((el) => el !== e),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postVideogames(input));
    alert("Tu videojuego ha sido creado");
    setInput({
      name: "",
      description: "",
      released: "",
      rating: "",
      image: "",
      platforms: [],
      genres: [],
    });
    history.push("/home");
  }

  return (
    <div>
      <Container2>
      <Title>¡Creá tu videojuego!</Title>
      <form onSubmit={handleSubmit}>
        <Div>
          <Input
            placeholder="Ingresar nombre"
            type="text"
            value={input.name}
            name="name"
            onChange={handleChange}
          />
          {errors.name && <Error>{errors.name}</Error>}
        </Div>
        <Div>
          {/* <label>Descripción: </label> */}
          <Input
            placeholder="Ingresar descripción"
            type="text"
            value={input.description}
            name="description"
            onChange={handleChange}
          />
          {errors.description && <Error>{errors.description}</Error>}
        </Div>
        <Div>
          <Label type="date">Fecha de lanzamiento: </Label>
          <Input
            type="date"
            value={input.released}
            name="released"
            onChange={handleChange}
            placeholder="Ingrese la fecha de lanzamiento"
          />

          {errors.released && <Error>{errors.released}</Error>}
        </Div>
        <Div>
          {/* <label>Rating: </label> */}
          <Input
            placeholder="Ingresar rating"
            type="number"
            value={input.rating}
            name="rating"
            onChange={handleChange}
          />
          {errors.rating && <Error>{errors.rating}</Error>}
        </Div>
        <Div>
          {/* <label>Imagen: </label> */}
          <Input
            placeholder="Ingresar URL de imagen"
            type="text"
            value={input.image}
            name="image"
            onChange={handleChange}
          />
          {errors.image && <Error>{errors.image}</Error>}
        </Div>
        <SelectWrapper>
          {/* <label>Géneros: </label> */}
          <Select onChange={(e) => handleSelectGenres(e)}>
            <Option value="All">Seleccionar género</Option>
            {genres &&
              genres.map((genre) => {
                return (
                  <Option key={genre.id} value={genre.name}>
                    {genre.name}
                  </Option>
                );
              })}
          </Select>
        </SelectWrapper>
        <div>
          {input.genres.map((el) => (
            <ContainerPyX>
              <P>{el + " "}</P>
              <ButtonX type="button" onClick={() => handleDeleteGenres(el)}>
                x
              </ButtonX>
            </ContainerPyX>
          ))}
        </div>
        <SelectWrapper>
          {/* <label>Plataformas: </label> */}
          <Select onChange={(e) => handleSelect(e)}>
            <Option value="All">Seleccionar plataformas</Option>
            {platformsList &&
              platformsList.map((platform) => {
                return (
                  <Option key={platform} value={platform}>
                    {platform}
                  </Option>
                );
              })}
          </Select>
          {errors.platforms && <Error>{errors.platforms}</Error>}
        </SelectWrapper>
        <div>
          {input.platforms.map((e) => (
            <ContainerPyX>
              <P>{e + " "}</P>
              <ButtonX type="button" onClick={() => handleDeletePlatforms(e)}>
                x
              </ButtonX>
            </ContainerPyX>
          ))}
        </div>
        <ContainerButton>
          <Link to="/home">
          <Button>Volver a inicio</Button>
        </Link>
          {errors.name ? null : 
            <Button type="submit" onSubmit={(e) => handleSubmit(e)} disabled={errors.name}>
              Crear videojuego
            </Button>
          }
        </ContainerButton>
      </form>
      </Container2>
    </div>
  );
}



const Container2 = styled.div`
  border: 1px solid black;
  width: 100%;
  max-width: 500px;
  padding: 50px;
  border-radius: 10px;
  margin: auto;
  margin-top: 50px;
  backdrop-filter: blur(10px);
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    padding: 30px;
    margin-top: 60px;
    width: 80%;

  }

  @media (max-width: 500px) {
    padding: 20px;
    
  }
`;


const Image = styled.img`
 z-index: -1;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-top: -1rem;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 0;
  }
`;

const Div = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 1rem;
width: 100%;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.3rem;
    width: 95%;
  }
`;

const SelectWrapper = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 1rem;
width: 100%;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0.3rem;
    width: 99%
  }
`;

const Label = styled.label`
  color: gray;
  margin: 0;
  padding: 0;
  text-align: left;
`;

const Option = styled.option`
  padding: 0.5rem;
`;

const ContainerPyX = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  min-width: 20rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const P = styled.option`
  text-align: left;
`;

const ButtonX = styled.button`
padding: 0.3rem 0.5rem;
border-radius: 3px;
background-color: red;
color: white;
border: none;
`;

const ContainerButton = styled.div`
width: 22rem;
padding: 20px;
margin: auto;
margin-top: -10px;
display: flex;
justify-content: space-between;

@media screen and (max-width: 768px) {
  width: 80%;
  display: flex;
  margin-right: 0%
`;

const Button = styled.button`
padding: 10px 15px;
  background: #FFC300;
  border-radius: 4px;
  border: solid 0px ;
  font-weight: 500;
  color: black;
  letter-spacing: 0px;
  font-size: 15px;
  cursor: pointer;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    font-size: 13px;
    margin-right: 10%
  }
`;

const Error = styled.p`
  color: red;
  margin: 0;
  padding: 0;
  text-align: left;

  
`;
