import React from "react";
import PhotoGallery from "../components/PhotoGallery";
import styled from "styled-components";

// Estilos aplicados diretamente no GalleryPageContainer e GalleryTitle
const GalleryPageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const GalleryTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

export default function Gallery() {
  return (
    <GalleryPageContainer>
      <GalleryTitle>Photo Gallery</GalleryTitle>
      <PhotoGallery />
    </GalleryPageContainer>
  );
}
