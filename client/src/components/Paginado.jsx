import React from "react";
import styled from "styled-components";

export default function Paginado ({videogamesPerPage, allVideogames, paginado}){
    const pageNumbers = []

    for(let i = 0; i < Math.ceil(allVideogames / videogamesPerPage); i++){
        pageNumbers.push(i+1)
    }

    return(
        <Nav>
            <Ul>
                { pageNumbers &&
                pageNumbers.map(number => {
                    return (
                    <Li className="number" key={number}>
                    <button onClick={() => paginado(number)}>{number}</button>
                    </Li>
                )})}
            </Ul>
        </Nav>
    )
}

const Nav = styled.nav`
  position: absolute;
  bottom: -65%;
  left: 49%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    top: 10%
  } 

`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    list-style: none;
  display: flex;
  gap: 0.6rem;
  }
`;

const Li = styled.li`
  button {
    background-color: #FFB20D;
    border: none;
    color: black;
    padding: 0.5rem 1rem;
    cursor: pointer;
    &:hover {
      background-color: #555;
    }
  }

  @media (max-width: 768px) {
    button {
      background-color: #FFB20D;
      border: none;
      color: black;
      padding: 0.5rem 1rem;
    
      &:hover {
        background-color: #555;
      }
    }
`;