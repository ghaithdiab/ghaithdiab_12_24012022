import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`
const Title=styled.h1`
color: #e60000;
font-weight: 700;
font-size: 5rem;
`
    
  const Text=styled.span`
    color: #282d30;
    font-weight: 500;
    font-size: 3rem;
  `
    
const ErrorPage=()=>{
  return (
    <Container>
      <Title>404</Title>
      <Text>Page non trouvée !</Text>
    </Container>
  )
}

export default ErrorPage;