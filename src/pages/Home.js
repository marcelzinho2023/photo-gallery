import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

export default function Home() {
  return (
    <HomeContainer>
      <Title>Seja Bem Vindo a Galeria de Fotos!</Title>
    </HomeContainer>
  );
}
