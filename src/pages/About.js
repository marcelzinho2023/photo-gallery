import React from "react";
import styled from "styled-components";

// Estilização básica
const AboutContainer = styled.div`
  padding: 20px;
  text-align: center;
  margin: 0 auto;
  max-width: 600px;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #555;
`;

const AboutTitle = styled.h2`
  color: #333;
`;

export default function About() {
  return (
    <AboutContainer>
      <AboutTitle>Sobre o aplicativo</AboutTitle>
      <AboutText>
        Uma galeria de fotos interativa que permite aos usuários explorar uma
        vasta coleção de imagens de alta qualidade, obtidas diretamente da API
        do Unsplash. O aplicativo oferece uma experiência visual atraente e
        organizada, exibindo fotos categorizadas e permitindo a navegação por
        diferentes páginas. Ideal para quem deseja descobrir belas fotografias
        ou obter inspiração visual.
      </AboutText>
      <AboutText>
        Este projeto foi construído com React, styled-components e utiliza o
        localStorage para autenticação de usuários.
      </AboutText>
    </AboutContainer>
  );
}
