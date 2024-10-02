import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

// Estilos aplicados diretamente no GalleryContainer e PhotoCard
const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  padding: 0 20px;
`;

const PhotoCard = styled.div`
  margin: 10px;
  padding: 10px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  img {
    width: 200px;
    height: auto;
    border-radius: 8px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export default function PhotoGallery() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=UHj9Oj65sITmOjUJToYTZm2NcoRBHMQYtd7eZ70CGv4"
      )
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from Unsplash API", error);
      });
  }, []);

  return (
    <GalleryContainer>
      {photos.map((photo) => (
        <PhotoCard key={photo.id}>
          <img src={photo.urls.small} alt={photo.alt_description} />
        </PhotoCard>
      ))}
    </GalleryContainer>
  );
}
