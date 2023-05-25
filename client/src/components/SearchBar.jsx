import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogames } from "../redux/actions";
import styled from "styled-components";

export default function SearchBar (){
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    } 

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameVideogames(name))
    }

    return (
        <SearchBarContainer>
            <Input 
            type = 'text'
            placeholder="Buscar..."
            onChange={(e) => handleInputChange(e)}
            />
            <Button type="submit" onClick={(e) => handleSubmit(e)}>Buscar</Button>
        </SearchBarContainer>
    )
}

const SearchBarContainer = styled.form`
z-index: 1;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;

@media (max-width: 768px) {
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
`;

const Input = styled.input`
  z-index: 2;
  padding: 8px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  left: 0;
  right: 0;
  margin-top: -330px;

  @media (max-width: 768px) {
    z-index: 2;
    margin-bottom: 150px;
  }
`;

const Button = styled.button`
z-index: 2;
background-color: #FFC300;
border: none;
padding: 12px 15px;
border-radius: 5px;
margin-left: 4px;
right: 0;
margin-top: -330px;
cursor: pointer;
color: black;
&:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
margin-bottom: 150px;
&:hover {
    background-color: #555;
  }
}
`;