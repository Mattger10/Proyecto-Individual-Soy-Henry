import React from "react";
import styled from "styled-components";

export default function Card({ id, name, genres, rating, image }) {
  return (
    <CardContainer>
      <div>
        <CardImage src={image} alt={name} />
        <CardDetails>
          <CardTitle>{name}</CardTitle>
          <CardGenre>Géneros: {genres}</CardGenre>
          <CardRating>Rating: {rating}</CardRating>
        </CardDetails>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
	justify-content: space-between;
	text-align: center;
	height: 400px;
	width: 10px;
	align-items: center;
	border: solid 1.5px;
	background-size: cover;
 	backdrop-filter: blur(4px);

	display: flex;
	flex-direction: row;
	vertical-align: bottom;
	width: 350px;
	color: black;
	font-family: inherit;
	border-radius: 10px;
	margin-top: 10px;
	margin-bottom: 5px;
	margin-left: 5px;
	margin-right: 5px;
	float: left;
	box-shadow: 0 10px 10px rgba(7, 17, 19, 0.185);
  justify-content: center;

  @media (max-width: 768px) {
	height: 360px;
 	backdrop-filter: blur(7px);
	width: 330px;
	margin-top: 5px;
	margin-bottom: 5px;
	margin-left: 5px;
	margin-right: 5px;
  	justify-content: center;
  }
`;

const CardImage = styled.img`
width: 300px;
height: 200px;
border-radius: 15px;
`;

const CardDetails = styled.div`
padding: 10px;
`;

const CardTitle = styled.h3`
color: White;
margin-top: 10px;
font-family: inherit;
text-shadow: black;
font-size: 20px;
box-shadow: 0 10px 5px rgba(0, 0, 0, 0);
`;

const CardGenre = styled.h5`
color: white;
  margin-bottom: 10px;
`;

const CardRating = styled.h5`
color: white;
margin-bottom: 0;
`;
