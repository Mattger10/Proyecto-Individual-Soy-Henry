import React from 'react';
import styled from 'styled-components';

export default function Loading() {
    return (
        <LoadingContainer>
         <div></div>
        </LoadingContainer>
    );
  }

  const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  div {
  width: 20px;
  height: 20px;
  border-radius: 800px;
  background-color: #FFC300;

  
  .loader div
  height: 80%;
  width: 80%;
  border-radius: 8px;
  background-color: #FFC300;
  animation: width7435 5s linear infinite;
  transition: all;
  }
  @keyframes width7435 {
    from {
      /*width: 0;*/
      transform: scaleX(0);
    }
  
    to {
      transform: scaleX(1);
    }
  }
  @keyframes width7435 {
    from {
      /*width: 0;*/
      transform: scaleX(0);
    }
  
    to {
      transform: scaleX(1);
    }
  }
  `
  

